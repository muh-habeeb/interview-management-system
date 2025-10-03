# Interview Management System - Architecture Analysis Prompt

## Project Overview
Create comprehensive architecture diagrams for a Next.js 15 Interview Management System with the following technical stack and requirements.

## Technical Stack Analysis

### Frontend Framework
- **Next.js 15** with App Router architecture
- **React 19** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS** + **shadcn/ui** for styling
- **Stream Video SDK** for video conferencing
- **Monaco Editor** for code editing

### Backend & Database
- **Convex** as real-time database and server functions
- **Clerk** for authentication and user management
- **Stream** for video/chat services

### Authentication Flow
- Clerk handles user authentication with JWT tokens
- Convex integrates with Clerk for secure database operations
- Middleware protects routes automatically

## Database Schema (Convex)

### Users Table
```typescript
users: {
  clerkId: string,        // Clerk user ID for auth
  name: string,
  email: string,
  image?: string,
  role: "candidate" | "interviewer"
}
// Index: by_clerk_Id
```

### Interviews Table
```typescript
interviews: {
  title: string,
  description?: string,
  startTime: number,       // Unix timestamp
  endTime?: number,        // Unix timestamp
  status: string,          // "scheduled" | "in-progress" | "completed"
  streamCallId: string,    // Stream video call ID
  candidateId: string,     // Reference to users.clerkId
  interviewerIds: string[], // Array of interviewer IDs
  createdBy: string        // Who created the interview
}
// Indexes: by_candidate_id, by_stream_call_id
```

### Comments Table
```typescript
comments: {
  content: string,
  rating: number,          // Interview rating
  interviewerId: string,   // Who left the comment
  interviewId: Id<"interviews"> // Reference to interview
}
// Index: by_interview_id
```

## Application Structure

### Route Structure (Next.js App Router)
```
/                          # Home page
/(admin)/dashboard         # Admin dashboard
/meeting/[id]             # Interview meeting room
/recordings               # Meeting recordings
/schedule                 # Interview scheduling
```

### Component Architecture
```
components/
├── UI Components (shadcn/ui)
├── Meeting Components (Stream integration)
├── Admin Components
├── Scheduling Components
├── Providers (Clerk, Convex, Stream, Theme)
└── Hooks (Meeting, User, Calls)
```

### Key Features
1. **User Authentication** - Clerk-based with role management
2. **Interview Scheduling** - Calendar UI with availability
3. **Video Meetings** - Stream-powered HD video calls
4. **Recording Management** - Automatic recording and playback
5. **Admin Dashboard** - Interview management interface
6. **Real-time Updates** - Convex real-time database
7. **Comments & Ratings** - Post-interview feedback

## Data Flow Patterns

### Authentication Flow
1. User signs in via Clerk
2. Clerk issues JWT token
3. Convex validates token via auth.config.ts
4. User data stored/retrieved from Convex users table

### Interview Creation Flow
1. Admin/Interviewer creates interview
2. Data stored in Convex interviews table
3. Stream call created with streamCallId
4. Notifications sent to participants

### Meeting Flow
1. Participant joins via meeting/[id] route
2. Stream SDK initializes video call
3. Real-time data synced via Convex
4. Comments/ratings stored post-meeting

### Real-time Synchronization
- Convex provides real-time database updates
- Stream handles video/chat real-time communication
- React state management with custom hooks

## Security Considerations
- Clerk middleware protects all routes
- Convex functions validate user identity
- Stream tokens generated server-side
- Role-based access control (candidate/interviewer)

## Deployment Architecture
- **Frontend**: Vercel (Next.js deployment)
- **Database**: Convex Cloud (real-time backend)
- **Authentication**: Clerk (managed auth service)
- **Video**: Stream (managed video service)

## Integration Points
1. **Clerk ↔ Convex**: User authentication and data sync
2. **Stream ↔ Convex**: Video calls linked to interview records
3. **Next.js ↔ All Services**: Frontend orchestration
4. **Server Actions**: Stream token generation and meeting management

Create detailed Mermaid diagrams showing:
1. Overall system architecture
2. Database entity relationships
3. Data flow diagrams
4. Authentication flow
5. User journey flows
6. Component relationships