
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
//  createSchema

export default defineSchema({
  users: defineTable({
    clerkId: v.string(), // store user id into convex db for authentication and other 
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    role: v.union(v.literal("candidate"), v.literal("interviewer")),
  }).index("by_clerk_Id",["clerkId"]),
});
 