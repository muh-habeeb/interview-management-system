import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

/**
 * Mutation: syncUser
 * ----------------------------------
 * Creates a new user in the "users" table if they don’t already exist.
 * - Uses Clerk ID as the unique identifier.
 * - Assigns a default role of "candidate".
 */
export const syncUser = mutation({
  args: {
    name: v.string(),                // User's display name
    email: v.string(),               // User's email
    clerkId: v.string(),             // Unique Clerk user ID
    image: v.optional(v.string()),   // Optional profile image URL
  },
  handler: async (ctx, args) => {
    // Check if a user with this Clerk ID already exists
    const existingUser = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("clerkId"), args.clerkId))
      .first();

    if (existingUser) return; // Do nothing if user already exists

    // Insert new user into database with default "candidate" role
    return await ctx.db.insert("users", {
      ...args,
      role: "candidate",
    });
  },
});

/**
 * Query: getUsers
 * ----------------------------------
 * Fetches all users from the "users" table.
 * - Requires authentication (only logged-in users can access).
 */
export const getUsers = query({
  handler: async (ctx) => {
    // Verify authentication
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) throw new Error("User is not authenticated");

    // Return all users from database
    const users = await ctx.db.query("users").collect();
    return users;
  },
});

/**
 * Query: getUserByClerkId
 * ----------------------------------
 * Retrieves a single user by their Clerk ID.
 * - Uses "by_clerk_Id" index for efficient lookup.
 */
export const getUserByClerkId = query({
  args: { clerkId: v.string() }, // Clerk user ID to search for
  handler: async (ctx, args) => {
    // Lookup user using indexed query for performance
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_Id", (q) => q.eq("clerkId", args.clerkId))
      .first();

    return user;
  },
});
