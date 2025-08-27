// Import Convex HTTP utilities
import { httpRouter } from "convex/server";
import { httpAction } from "./_generated/server";

// Import Clerk's webhook event type
import { WebhookEvent } from "@clerk/nextjs/server";

// Svix is the library Clerk uses under the hood for secure webhooks
import { Webhook } from "svix";

// Import generated Convex API endpoints
import { api } from "./_generated/api";

// Create a Convex HTTP router (to handle external HTTP requests)
const http = httpRouter();

// Register a new route: POST /clerk-webhook
http.route({
  path: "/clerk-webhook",
  method: "POST",

  // Wrap the handler with Convex's httpAction (so we can access ctx + DB)
  handler: httpAction(async (ctx, request) => {
    // Get Clerk webhook secret (must be set in .env)
    const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
    if (!webhookSecret) {
      throw new Error("CLERK_WEBHOOK_SECRET is not set in env");
    }

    // Extract security headers from Clerk's webhook request
    const svix_id = request.headers.get("svix-id");
    const svix_signature = request.headers.get("svix-signature");
    const svix_timestamp = request.headers.get("svix-timestamp");

    // If any required headers are missing → reject request
    if (!svix_id || !svix_signature || !svix_timestamp) {
      return new Response("No svix headers found", {
        status: 400,
      });
    }

    // Read JSON payload sent by Clerk
    const payload = await request.json();
    const body = JSON.stringify(payload);

    // Create a new webhook verifier (with secret)
    const wh = new Webhook(webhookSecret);
    let evt: WebhookEvent;

    try {
      // Verify webhook signature & parse into Clerk's event type
      evt = wh.verify(body, {
        "svix-id": svix_id,
        "svix-timestamp": svix_timestamp,
        "svix-signature": svix_signature,
      }) as WebhookEvent;
    } catch (err) {
      console.error("Error verifying webhook:", err);
      return new Response("Error occurred", { status: 400 });
    }

    // Clerk event type (e.g., "user.created", "user.deleted", etc.)
    const eventType = evt.type;

    // Handle user.created event/ type == created 
    if (eventType === "user.created") {
      const { id, email_addresses, first_name, last_name, image_url } =
        evt.data;

      // Extract email & full name
      const email = email_addresses[0].email_address;
      const name = `${first_name || ""} ${last_name || ""}`.trim();

      try {
        // Call Convex mutation to sync user into DB
        await ctx.runMutation(api.users.syncUser, {
          clerkId: id,
          email,
          name,
          image: image_url,
        });
      } catch (error) {
        console.log("Error creating user:", error);
        return new Response("Error creating user", { status: 500 });
      }
    }

    // Respond OK so Clerk knows webhook was processed
    return new Response("Webhook processed successfully", { status: 200 });
  }),
});

// Export HTTP router for Convex
export default http;
