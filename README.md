<div align="center">
  <h1>🎯 Interview Management System</h1>
  
  <p>
    <strong>A comprehensive interview scheduling and meeting management platform</strong>
  </p>
  
  <p>
    Built with Next.js, Convex, Stream, and Clerk for seamless interview experiences
  </p>

  ![Next.js](https://img.shields.io/badge/Next.js-15.4.7-black?style=for-the-badge&logo=next.js&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
  ![Convex](https://img.shields.io/badge/Convex-Database-orange?style=for-the-badge&logo=convex&logoColor=white)
  ![Stream](https://img.shields.io/badge/Stream-Video-006CFF?style=for-the-badge&logo=stream&logoColor=white)
  ![Clerk](https://img.shields.io/badge/Clerk-Auth-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)

  <p>
    <a href="https://github.com/muh-habeeb/interview-management-system"><strong>📖 Repository</strong></a> •
    <a href="#-getting-started"><strong>🚀 Quick Start</strong></a> •
    <a href="#-features"><strong>✨ Features</strong></a> •
    <a href="#-contributing"><strong>🤝 Contributing</strong></a>
  </p>

  <br>

  <!-- Add your screenshot here -->
  <!-- ![Screenshot](./public/screenshot.png) -->
  <em>Screenshot coming soon - add your app screenshot to /public/screenshot.png</em>

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠 Tech Stack](#-tech-stack)
- [📁 Project Structure](#-project-structure)
- [⚡ Requirements](#-requirements)
- [🚀 Getting Started](#-getting-started)
- [🔧 Environment Variables](#-environment-variables)
- [📜 Scripts](#-scripts)
- [☁️ Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👥 Contact](#-contact)

## ✨ Features

<div align="center">
  <table>
    <tr>
      <td align="center">
        <div style="font-size: 32px;">📅</div>
        <br><strong>Smart Scheduling</strong>
        <br><em>Intuitive calendar UI with availability selection</em>
      </td>
      <td align="center">
        <div style="font-size: 32px;">🎥</div>
        <br><strong>Video Meetings</strong>
        <br><em>HD video calls with Stream integration</em>
      </td>
      <td align="center">
        <div style="font-size: 32px;">👥</div>
        <br><strong>User Management</strong>
        <br><em>Role-based access with Clerk authentication</em>
      </td>
    </tr>
    <tr>
      <td align="center">
        <div style="font-size: 32px;">💾</div>
        <br><strong>Real-time Data</strong>
        <br><em>Live updates with Convex backend</em>
      </td>
      <td align="center">
        <div style="font-size: 32px;">📊</div>
        <br><strong>Admin Dashboard</strong>
        <br><em>Comprehensive management interface</em>
      </td>
      <td align="center">
        <div style="font-size: 32px;">🎬</div>
        <br><strong>Recordings</strong>
        <br><em>Automatic meeting recording and playback</em>
      </td>
    </tr>
  </table>
</div>

### 🎯 Core Capabilities

- 📅 **Interview Scheduling** - Schedule interviews with calendar integration
- 🎥 **Video Conferencing** - High-quality video calls with Stream Video SDK
- 👤 **Authentication** - Secure user management with Clerk
- 💾 **Data Storage** - Real-time database operations with Convex
- 📝 **Comments & Notes** - Add comments and notes to interviews
- 📊 **Admin Dashboard** - Comprehensive admin interface
- 🎬 **Recording Management** - Automatic recording and playback features

## 🛠 Tech Stack

<div align="center">

### Frontend
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)

### Backend & Database
![Convex](https://img.shields.io/badge/Convex-FF6B35?style=for-the-badge&logo=convex&logoColor=white)

### Authentication & Video
![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white)
![Stream](https://img.shields.io/badge/Stream-006CFF?style=for-the-badge&logo=stream&logoColor=white)

### Development Tools
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/Prettier-F7BA3E?style=for-the-badge&logo=prettier&logoColor=black)

</div>

| Category | Technology | Purpose |
|----------|------------|---------|
| **Frontend** | Next.js (App Router) | React framework with server-side rendering |
| **Language** | TypeScript | Type-safe JavaScript |
| **Styling** | Tailwind CSS | Utility-first CSS framework |
| **UI Components** | shadcn/ui | Beautiful, accessible React components |
| **Backend** | Convex | Real-time database and server functions |
| **Authentication** | Clerk | User authentication and management |
| **Video/Chat** | Stream SDK | Real-time video conferencing |
| **Editor** | Monaco | Code editor components |
| **Icons** | Lucide React | Beautiful icon library |
| **IDE** | VS Code | Recommended development environment |

## 📁 Project Structure

```
interview-management-system/
├── 📁 src/
│   ├── 📁 app/                    # Next.js App Router
│   │   ├── 📁 (admin)/           # Admin routes
│   │   ├── 📁 (root)/            # Main app routes
│   │   └── 📄 layout.tsx         # Root layout
│   ├── 📁 components/            # React components
│   │   ├── 📁 ui/                # shadcn/ui components
│   │   ├── 📁 hooks/             # Custom hooks
│   │   └── 📁 providers/         # Context providers
│   ├── 📁 constants/             # App constants
│   └── 📁 lib/                   # Utility functions
├── 📁 convex/                    # Convex backend
│   ├── 📄 schema.ts              # Database schema
│   ├── 📄 interviews.ts          # Interview functions
│   ├── 📄 users.ts               # User functions
│   └── 📄 auth.config.ts         # Auth configuration
├── 📁 public/                    # Static assets
├── 📄 components.json            # shadcn/ui configuration
├── 📄 package.json               # Dependencies
├── 📄 next.config.ts             # Next.js config
├── 📄 tailwind.config.js         # Tailwind config
└── 📄 README.md                  # This file
```

## ⚡ Requirements

| Requirement | Version | Notes |
|-------------|---------|-------|
| ![Node.js](https://img.shields.io/badge/Node.js-43853D?style=flat&logo=node.js&logoColor=white) | 18+ LTS | Recommended for stability |
| ![npm](https://img.shields.io/badge/npm-CB3837?style=flat&logo=npm&logoColor=white) | Latest | Package manager |
| ![Git](https://img.shields.io/badge/Git-F05032?style=flat&logo=git&logoColor=white) | Latest | Version control |
| ![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=flat&logo=visual-studio-code&logoColor=white) | Latest | Recommended IDE with extensions |

### 🔧 Recommended VS Code Extensions

- **ES7+ React/Redux/React-Native snippets** - Code snippets
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **TypeScript Importer** - Auto import TypeScript modules
- **Prettier** - Code formatter
- **ESLint** - Code linting

## 🚀 Getting Started

### Quick Setup (5 minutes)

1️⃣ **Clone the repository**
```powershell
git clone https://github.com/muh-habeeb/interview-management-system.git
cd interview-management-system
```

2️⃣ **Install dependencies**
```powershell
npm install
```

3️⃣ **Set up environment variables**

Create a `.env.local` file in the project root:
```bash
# Copy the template below and fill in your values
cp .env.example .env.local  # If you have an example file
```

4️⃣ **Start Convex (Optional but recommended)**
```powershell
npx convex dev
```

5️⃣ **Run the development server**
```powershell
npm run dev
```

🎉 **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

### 🔧 Environment Variables

Create a `.env.local` file in the project root with the following variables:

<details>
<summary>📋 <strong>Click to expand environment variables</strong></summary>

```bash
# 🔐 Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_secret_here
CLERK_JWT_ISSUER_DOMAIN=your-domain.clerk.accounts.dev
CLERK_WEBHOOK_SECRET=whsec_your_webhook_secret

# 🗄️ Convex Database
CONVEX_DEPLOYMENT=your_deployment_name
NEXT_PUBLIC_CONVEX_URL=https://your_deployment.convex.cloud

# 📹 Stream Video & Chat
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key
```

### 🔑 Getting API Keys

| Service | Where to get keys | Documentation |
|---------|------------------|---------------|
| **Clerk** | [Clerk Dashboard](https://dashboard.clerk.com/) | [Clerk Docs](https://clerk.com/docs) |
| **Convex** | [Convex Dashboard](https://dashboard.convex.dev/) | [Convex Docs](https://docs.convex.dev/) |
| **Stream** | [Stream Dashboard](https://dashboard.getstream.io/) | [Stream Docs](https://getstream.io/video/docs/) |

> ⚠️ **Security Note**: Never commit secrets to version control. Use `.env.local` for local development and environment variables in production.

</details>## 📜 Scripts

| Command | Description | When to use |
|---------|-------------|-------------|
| `npm run dev` | Start development server with Turbopack | 🧪 Development |
| `npm run build` | Build production bundle | 🏗️ Before deployment |
| `npm run start` | Start production server | 🚀 Production |
| `npm run lint` | Run ESLint checks | 🔍 Code quality |

```powershell
# Development workflow
npm run dev     # Start dev server at http://localhost:3000
npm run lint    # Check for code issues
npm run build   # Test production build
npm run start   # Test production server
```

## ☁️ Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/muh-habeeb/interview-management-system)

<details>
<summary>📋 <strong>Manual Vercel Deployment Steps</strong></summary>

1. **Connect Repository**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**
   - Add all environment variables from your `.env.local`
   - Make sure to use production values for API keys

3. **Deploy**
   - Click "Deploy"
   - Vercel will automatically build and deploy your app

4. **Set up Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain

</details>

### Other Deployment Options

<details>
<summary>🐳 <strong>Docker Deployment</strong></summary>

```dockerfile
# Dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]
```

</details>

### 🔧 Convex Deployment

For production Convex deployment:

```powershell
# Deploy Convex functions
npx convex deploy

# Get your production Convex URL
npx convex dashboard
```

Update your environment variables with the production Convex URL.

## 🤝 Contributing

We love contributions! Here's how you can help make this project even better:

### 🌟 Ways to Contribute

- 🐛 **Report bugs** - Found an issue? Let us know!
- 💡 **Suggest features** - Have a great idea? We'd love to hear it!
- 📖 **Improve docs** - Help make our documentation clearer
- 🔧 **Submit PRs** - Fix bugs or add new features

### 🚀 Getting Started

1. **Fork the repository**
   ```bash
   # Click the Fork button on GitHub
   ```

2. **Clone your fork**
   ```powershell
   git clone https://github.com/YOUR_USERNAME/interview-management-system.git
   cd interview-management-system
   ```

3. **Create a feature branch**
   ```powershell
   git checkout -b feat/amazing-feature
   ```

4. **Make your changes**
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation

5. **Test your changes**
   ```powershell
   npm run lint
   npm run build
   npm run dev  # Test locally
   ```

6. **Commit and push**
   ```powershell
   git add .
   git commit -m "feat: add amazing feature"
   git push origin feat/amazing-feature
   ```

7. **Open a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Fill out the PR template

### 📋 Pull Request Guidelines

- ✅ Provide a clear description of the changes
- ✅ Include screenshots for UI changes
- ✅ Make sure all tests pass
- ✅ Follow the existing code style
- ✅ Update documentation if needed

### 🎯 Development Setup

```powershell
# Install dependencies
npm install

# Start development servers
npm run dev          # Next.js dev server
npx convex dev       # Convex backend (in another terminal)

# Code quality checks
npm run lint         # ESLint
npm run build        # Test production build
```

## 🧪 Testing & Quality

- **ESLint**: Code linting with `npm run lint`
- **Prettier**: Code formatting (configured in project)
- **TypeScript**: Type checking with `tsc --noEmit`

### Future Testing Plans
- Unit tests with Jest
- Integration tests with Cypress
- CI/CD with GitHub Actions

## �‍💻 Contributors

We appreciate all the amazing people who have contributed to this project! 

### 🏆 Core Team

<div align="center">
  <table>
    <tr>
      <td align="center">
        <a href="https://github.com/muh-habeeb">
          <img src="https://github.com/muh-habeeb.png" width="100" style="border-radius: 50%" alt="muh-habeeb"/>
          <br><strong>Muhammed Habeeb Rahman K T</strong>
          <br><em>Project Lead & Full Stack Developer</em>
          <br>📧 Lead Developer
        </a>
      </td>
      <!-- Add more team members here -->
      <td align="center">
        <div style="width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(45deg, #667eea, #764ba2); display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; margin: 0 auto;">
          +
        </div>
        <br><strong>Your Name Here</strong>
        <br><em>Become a contributor!</em>
        <br>🚀 <a href="#-contributing">Join us</a>
      </td>
    </tr>
  </table>
</div>

### 🌟 All Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%">
        <a href="https://github.com/muh-habeeb">
          <img src="https://github.com/muh-habeeb.png" width="100" style="border-radius: 50%" alt="muh-habeeb"/>
          <br><sub><b>muh-habeeb</b></sub>
        </a>
        <br>💻 📖 🎨 ⚡ 🔧
      </td>
      <!-- Add more contributors here -->
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

### 📊 Contribution Stats

<div align="center">

![Contributors](https://img.shields.io/github/contributors/muh-habeeb/interview-management-system?style=for-the-badge&color=brightgreen)
![Last Commit](https://img.shields.io/github/last-commit/muh-habeeb/interview-management-system?style=for-the-badge&color=blue)
![Commit Activity](https://img.shields.io/github/commit-activity/m/muh-habeeb/interview-management-system?style=for-the-badge&color=orange)

</div>

### 🎯 Want to be featured here?

1. 🍴 **Fork the repo** and make meaningful contributions
2. 📝 **Submit quality PRs** with clear descriptions
3. 🤝 **Help others** by reviewing PRs and answering questions
4. 📚 **Improve documentation** or add examples
5. 🐛 **Report bugs** or suggest enhancements

**Recognition levels:**
- 🥉 **First contribution**: Welcome badge
- 🥈 **5+ contributions**: Featured contributor
- 🥇 **Core contributor**: Special recognition & direct collaboration

## �📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 muh-habeeb

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 👥 Contact

<div align="center">

### 🛠 Maintainer

**muh-habeeb**
- GitHub: [@muh-habeeb](https://github.com/muh-habeeb)
- Repository: [interview-management-system](https://github.com/muh-habeeb/interview-management-system)

### 💬 Support

- 🐛 **Bug reports**: [Open an issue](https://github.com/muh-habeeb/interview-management-system/issues/new?template=bug_report.md)
- 💡 **Feature requests**: [Request a feature](https://github.com/muh-habeeb/interview-management-system/issues/new?template=feature_request.md)
- 💭 **Discussions**: [GitHub Discussions](https://github.com/muh-habeeb/interview-management-system/discussions)

</div>

---

<div align="center">

### 🌟 Show your support

Give a ⭐️ if this project helped you!

[![GitHub stars](https://img.shields.io/github/stars/muh-habeeb/interview-management-system?style=social)](https://github.com/muh-habeeb/interview-management-system/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/muh-habeeb/interview-management-system?style=social)](https://github.com/muh-habeeb/interview-management-system/network/members)

**Made with ❤️ and ☕ by [muh-habeeb](https://github.com/muh-habeeb)**

</div>
