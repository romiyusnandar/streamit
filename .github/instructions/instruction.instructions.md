---
applyTo: '**'
---
Act as a Senior Frontend Engineer and UX Specialist. I need you to scaffold and build a modern Anime Streaming Web Application.

**Project Context:**
- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables for theming
- **UI Library:** Shadcn/UI (for that minimalist, accessible look)
- **Icons:** Lucide React
- **State Management:** Zustand (if needed for global player state)
- **Animation:** Framer Motion (for micro-interactions)

**Core Philosophy:**
- **Design:** "Invisible UI". The focus must be 100% on the anime art/content. Minimalist typography, generous whitespace, strict grid system.
- **UX:** Focus on perceived performance. Use Skeleton loaders everywhere. No layout shifts.
- **Architecture:** Component-Based Architecture with a "Feature-first" folder structure.

**Key Requirements:**
1. **Responsiveness:** Mobile-first approach. The video player must adhere to strictly responsive aspect ratios.
2. **Theming:** Full Light/Dark mode support (using `next-themes`) with smooth transitions. Default to Dark mode.
3. **Backend:** I already have a backend. For now, create a solid `services/api.ts` layer with mock data interfaces that I can easily swap with real API calls later.

**Folder Structure Preference:**
Keep it clean. Use `@/` imports.
- `app/` (Pages)
- `components/ui` (Base primitives)
- `components/features` (e.g., `anime-card`, `video-player`, `search-bar`)
- `lib/` (Utils)
- `hooks/` (Custom hooks like `useVideoPlayer`)

**Pages to Scaffold:**
1. **Home:** Featured carousel (hero), Trending row, Seasonal grid.
2. **Details:** Anime info, blurred backdrop, episode list.
3. **Watch:** Distraction-free theatre mode player, minimalist controls.

