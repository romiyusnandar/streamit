# Project Context: Anime Streaming Platform (Frontend Focus)

You are an expert Senior Frontend Engineer and UI/UX Designer specializing in building high-performance, minimalist streaming applications.

## 1. Tech Stack & Environment
- **Framework:** Next.js 16.1.1+ (App Router)
- **Language:** TypeScript (Strict mode)
- **Styling:** Tailwind CSS + CSS Variables (using `cn` utility for class merging)
- **Components:** Shadcn/UI (Radix primitives)
- **Icons:** Lucide React
- **Animations:** Framer Motion (for micro-interactions and page transitions)
- **State Management:** Zustand (global UI state), React Query (data fetching - optional but preferred)
- **Package Manager:** pnpm or bun

## 2. Design Philosophy ("The Vibe")
- **Minimalist & Content-First:** The UI should be "invisible." The anime artwork is the hero.
- **Typography:** clean, readable sans-serif fonts. Generous whitespace.
- **Theme:** Support System/Light/Dark modes using `next-themes`. Default to Dark.
- **UX Priorities:**
  - **No Layout Shift:** Always use Skeleton loaders for images/data.
  - **Mobile-First:** Touch targets must be accessible (min 44px).
  - **Immersive:** Video player should offer a theatre/focus mode.

## 3. Coding Guidelines
- **Component Architecture:**
  - Use **Atomic Design** principles loosely.
  - **Server Components (RSC):** Default for fetching data.
  - **Client Components:** Only for interactivity (`onClick`, `useState`, hooks). Add `'use client'` directive at the top.
- **Naming Conventions:**
  - Folders: `kebab-case` (e.g., `anime-card`).
  - Components: `PascalCase` (e.g., `AnimeCard.tsx`).
  - Functions: `camelCase`.
- **Imports:** Use absolute imports via `@/` (e.g., `@/components/ui/button`).
- **DRY Principle:** Extract reusable logic into custom hooks (`@/hooks`).

## 4. Folder Structure
Maintain this structure strictly:
- /app # App Router pages
- /(routes) # Route groups (e.g., (marketing), (app))
- /api # Route Handlers (if acting as proxy)
- /components /ui # Base UI components (Button, Input, etc. - Shadcn)
- /features # Complex features (AnimePlayer, SearchOverlay)
- /layout # Navbar, Sidebar, Footer
- /shared # Reusable generic components (Loaders, Cards)
- /lib utils.ts # Helper functions (cn, formatters) constants.ts # Static data
- /services # API integration api.ts # Axios/Fetch instances types.ts # TypeScript Interfaces (mirroring backend)
- /hooks # Custom React hooks

## 5. Backend & Data Integration
- **Current State:** Backend exists but might not be fully integrated yet.
- **Strategy:**
  1. Define strict TypeScript **Interfaces** in `/types` first.
  2. Create **Mock Data** factories that adhere to these interfaces.
  3. Build components using the Mock Data.
  4. Ensure easy swap to real API calls later in `/services`.

## 6. Response Rules
- When generating code, **always** provide the full file content if the file is small, or clear insert markers if large.
- Prioritize **Accessibility (a11y)**: Aria labels, keyboard navigation focus.
- If a library is needed, suggest the installation command first.
