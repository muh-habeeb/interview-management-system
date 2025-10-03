# Interview Management System - Architecture Diagrams

## 1. High-Level System Architecture

```mermaid
graph TB
    subgraph "🖥️ Client Side"
        UI[Next.js 15 App Router]
        Components[React 19 Components]
        VideoSDK[Stream Video SDK]
        Editor[Monaco Code Editor]
        ShadcnUI[shadcn/ui Components]
    end
    
    subgraph "🔐 Authentication"
        ClerkAuth[Clerk Authentication]
        JWT[JWT Token Management]
        Middleware[Next.js Middleware]
        RoleGuard[Role-based Access Control]
    end
    
    subgraph "⚡ Backend Services"
        ConvexDB[Convex Real-time Database]
        ServerFunctions[Convex Server Functions]
        StreamAPI[Stream Video API]
        ServerActions[Next.js Server Actions]
    end
    
    subgraph "☁️ Cloud Infrastructure"
        VercelHost[Vercel Hosting]
        ClerkCloud[Clerk Cloud Auth]
        ConvexCloud[Convex Cloud Backend]
        StreamCloud[Stream Video Cloud]
    end
    
    UI --> ClerkAuth
    UI --> ConvexDB
    UI --> StreamAPI
    Components --> VideoSDK
    Components --> Editor
    Components --> ShadcnUI
    ClerkAuth --> JWT
    JWT --> Middleware
    Middleware --> RoleGuard
    RoleGuard --> ServerFunctions
    ServerFunctions --> ConvexDB
    ServerActions --> StreamAPI
    
    UI -.-> VercelHost
    ClerkAuth -.-> ClerkCloud
    ConvexDB -.-> ConvexCloud
    StreamAPI -.-> StreamCloud
    
    classDef client fill:#e3f2fd,stroke:#1976d2,stroke-width:2px
    classDef auth fill:#fff3e0,stroke:#f57c00,stroke-width:2px
    classDef backend fill:#f3e5f5,stroke:#7b1fa2,stroke-width:2px
    classDef cloud fill:#e8f5e8,stroke:#388e3c,stroke-width:2px
    
    class UI,Components,VideoSDK,Editor,ShadcnUI client
    class ClerkAuth,JWT,Middleware,RoleGuard auth
    class ConvexDB,ServerFunctions,StreamAPI,ServerActions backend
    class VercelHost,ClerkCloud,ConvexCloud,StreamCloud cloud
```

## 2. Enhanced Database Schema & Relationships

```mermaid
erDiagram
    USERS {
        string clerkId PK "Clerk User ID"
        string name "Full Name"
        string email "Email Address"
        string image "Profile Picture URL"
        enum role "candidate OR interviewer"
        timestamp createdAt "Account Creation"
        timestamp updatedAt "Last Updated"
    }
    
    INTERVIEWS {
        id _id PK "Convex Generated ID"
        string title "Interview Title"
        string description "Interview Description"
        number startTime "Unix Timestamp"
        number endTime "Unix Timestamp"
        string status "scheduled|in-progress|completed|cancelled"
        string streamCallId UK "Stream Video Call ID"
        string candidateId FK "Reference to Users.clerkId"
        array interviewerIds "Array of Interviewer IDs"
        string createdBy FK "Reference to Users.clerkId"
        timestamp createdAt "Interview Creation"
        timestamp updatedAt "Last Modified"
    }
    
    COMMENTS {
        id _id PK "Convex Generated ID"
        string content "Comment Text"
        number rating "1-10 Rating Scale"
        string interviewerId FK "Reference to Users.clerkId"
        id interviewId FK "Reference to Interviews._id"
        timestamp createdAt "Comment Creation"
        boolean isPrivate "Internal Comment Flag"
    }
    
    STREAM_RECORDINGS {
        string callId PK "Stream Call ID"
        string recordingUrl "Recording File URL"
        number duration "Recording Duration (seconds)"
        timestamp startedAt "Recording Start Time"
        timestamp endedAt "Recording End Time"
        string quality "Recording Quality (HD/FHD)"
    }
    
    USERS ||--o{ INTERVIEWS : "is candidate in"
    USERS ||--o{ INTERVIEWS : "created by"
    USERS }o--o{ INTERVIEWS : "interviewer in (many-to-many)"
    USERS ||--o{ COMMENTS : "authored by"
    INTERVIEWS ||--o{ COMMENTS : "receives"
    INTERVIEWS ||--|| STREAM_RECORDINGS : "has recording"
```

## 3. Complete Authentication & Authorization Flow

```mermaid
sequenceDiagram
    participant User as 👤 User
    participant Browser as 🌐 Browser
    participant Middleware as 🛡️ Next.js Middleware
    participant Clerk as 🔐 Clerk Auth
    participant Convex as ⚡ Convex Backend
    participant StreamAPI as 📹 Stream API
    
    Note over User,StreamAPI: Initial Authentication
    User->>Browser: Access Application
    Browser->>Middleware: Route Request
    Middleware->>Clerk: Check Authentication
    
    alt User Not Authenticated
        Clerk->>Browser: Redirect to Sign In
        Browser->>User: Show Login Form
        User->>Clerk: Submit Credentials
        Clerk->>Clerk: Validate & Generate JWT
        Clerk->>Browser: Set Auth Cookies
    end
    
    Note over User,StreamAPI: Authenticated Request Flow
    Browser->>Middleware: Request with JWT
    Middleware->>Middleware: Validate JWT Token
    Middleware->>Convex: Forward Request + User Context
    Convex->>Clerk: Verify Token Signature
    Clerk->>Convex: Token Valid + User Info
    
    alt Database Operation
        Convex->>Convex: Execute Query/Mutation
        Convex->>Browser: Return Data
    end
    
    alt Video Call Creation
        Convex->>StreamAPI: Create Call with User Token
        StreamAPI->>StreamAPI: Generate Call Token
        StreamAPI->>Convex: Return Call Details
        Convex->>Browser: Video Call Ready
    end
    
    Browser->>User: Render Protected Content
```

## 4. Interview Creation Data Flow

```mermaid
flowchart TD
    A[Admin/Interviewer] --> B[Create Interview Form]
    B --> C[Validate Input]
    C --> D[Generate Stream Call ID]
    D --> E[Save to Convex DB]
    E --> F[Send Notifications]
    F --> G[Update UI State]
    
    subgraph "Convex Operations"
        E --> H[Store Interview Data]
        H --> I[Link Users]
        I --> J[Set Indexes]
    end
    
    subgraph "Stream Integration"
        D --> K[Create Video Room]
        K --> L[Generate Call Token]
    end
    
    G --> M[Interview Created]
```

## 5. User Journey - Complete Interview Process

```mermaid
journey
    title Interview Management User Journey
    section Scheduling
      Login: 5: Admin, Candidate, Interviewer
      Create Interview: 4: Admin
      Select Participants: 4: Admin
      Set Date/Time: 4: Admin
      Send Invitations: 3: System
    section Pre-Meeting
      Receive Notification: 3: Candidate, Interviewer
      Join Meeting Link: 4: Candidate, Interviewer
      Camera/Mic Check: 4: Candidate, Interviewer
    section During Meeting
      Video Conference: 5: Candidate, Interviewer
      Screen Sharing: 4: Interviewer
      Code Editor: 5: Candidate, Interviewer
      Real-time Chat: 4: Candidate, Interviewer
    section Post-Meeting
      End Meeting: 4: Interviewer
      Submit Comments: 4: Interviewer
      Rate Candidate: 4: Interviewer
      View Recording: 3: Admin, Interviewer
```

## 6. Component Architecture Diagram

```mermaid
graph TB
    subgraph "App Router Pages"
        A[layout.tsx]
        B[page.tsx - Home]
        C[dashboard/page.tsx]
        D[meeting/[id]/page.tsx]
        E[schedule/page.tsx]
        F[recordings/page.tsx]
    end
    
    subgraph "Providers"
        G[ConvexClerkProvider]
        H[StreamClientProvider]
        I[ThemeProvider]
    end
    
    subgraph "Core Components"
        J[Navbar]
        K[MeetingRoom]
        L[MeetingSetup]
        M[CodeEditor]
        N[Calendar]
    end
    
    subgraph "UI Components"
        O[Button]
        P[Dialog]
        Q[Card]
        R[Avatar]
    end
    
    subgraph "Custom Hooks"
        S[useGetCalls]
        T[useGetCallById]
        U[useMeetingActions]
        V[useUserRole]
    end
    
    A --> G
    G --> H
    H --> I
    B --> J
    D --> K
    K --> L
    K --> M
    E --> N
    J --> O
    K --> P
    N --> Q
    J --> R
    K --> S
    D --> T
    L --> U
    J --> V
```

## 7. Real-time Data Synchronization

```mermaid
graph LR
    subgraph "Frontend"
        A[React Components]
        B[Convex Hooks]
        C[Stream Hooks]
    end
    
    subgraph "Real-time Engines"
        D[Convex Sync]
        E[Stream WebRTC]
    end
    
    subgraph "Backend"
        F[Convex Functions]
        G[Stream API]
    end
    
    A --> B
    A --> C
    B <--> D
    C <--> E
    D <--> F
    E <--> G
    
    F --> H[(Convex DB)]
    G --> I[(Stream Cloud)]
```

## 8. Meeting State Management

```mermaid
stateDiagram-v2
    [*] --> Scheduled
    Scheduled --> WaitingRoom : Join Meeting
    WaitingRoom --> InProgress : Start Meeting
    InProgress --> InProgress : Share Screen
    InProgress --> InProgress : Use Code Editor
    InProgress --> InProgress : Send Messages
    InProgress --> Completed : End Meeting
    InProgress --> Disconnected : Network Issue
    Disconnected --> InProgress : Reconnect
    Disconnected --> Completed : Leave Meeting
    Completed --> [*]
```

## 9. Security & Authorization Flow

```mermaid
flowchart TD
    A[User Request] --> B{Authenticated?}
    B -->|No| C[Redirect to Clerk]
    B -->|Yes| D[Check JWT Token]
    C --> E[Clerk Login]
    E --> F[Generate JWT]
    F --> D
    D --> G{Valid Token?}
    G -->|No| C
    G -->|Yes| H[Extract User Role]
    H --> I{Authorized for Resource?}
    I -->|No| J[Access Denied]
    I -->|Yes| K[Process Request]
    K --> L[Return Response]
```

## 10. Deployment Architecture

```mermaid
graph TB
    subgraph "Vercel (Frontend)"
        A[Next.js App]
        B[Server Actions]
        C[API Routes]
    end
    
    subgraph "Clerk (Auth)"
        D[Authentication Service]
        E[User Management]
        F[JWT Issuer]
    end
    
    subgraph "Convex (Backend)"
        G[Real-time Database]
        H[Server Functions]
        I[File Storage]
    end
    
    subgraph "Stream (Video)"
        J[Video API]
        K[WebRTC Infrastructure]
        L[Recording Storage]
    end
    
    A --> D
    A --> G
    A --> J
    B --> G
    B --> J
    D --> F
    F --> H
    G --> I
    J --> K
    J --> L
```