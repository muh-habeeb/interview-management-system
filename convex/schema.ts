import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";
//  createSchema

export default defineSchema({
  //user table
  users: defineTable({
    clerkId: v.string(), // store user id into convex db for authentication and other
    name: v.string(),
    email: v.string(),
    image: v.optional(v.string()),
    role: v.union(v.literal("candidate"), v.literal("interviewer")),
  }).index("by_clerk_Id", ["clerkId"]),
  //interview table
  interviews: defineTable({
    title: v.string(),
    description: v.optional(v.string()),
    startTime: v.number(), //interview  starting time
    endTime: v.optional(v.number()), //interview  end time
    status: v.string(), //status of the interview
    streamCallId: v.string(), // caller id of stream
    candidateId: v.string(), //candidate id
    interviewerIds: v.array(v.string()), // interviewers ids  [one candidate-> many interviewer]
    createdBy: v.string(), // who created the interview
  })
    .index("by_candidate_id", ["candidateId"])
    .index("by_stream_call_id", ["streamCallId"]),

  //comment table

  comments: defineTable({
    content: v.string(),
    rating: v.number(),
    interviewerId: v.string(),
    interviewId: v.id("interviews"),
  }).index("by_interview_id", ["interviewId"]),
});
