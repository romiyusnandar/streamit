# StreamIt - Project Architecture Guide

## 🎯 Project Overview

StreamIt is a modern anime streaming platform built with Next.js 16.1.1, featuring an "Invisible UI" design philosophy that puts content first. The app is fully responsive, supports dark/light modes, and uses skeleton loaders for optimal perceived performance.

## 📁 Project Structure

```
streamit/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles & CSS variables
├── components/
│   ├── ui/                      # Base Shadcn/UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── separator.tsx
│   │   └── skeleton.tsx
│   ├── features/                # Feature-specific components
│   │   ├── navbar.tsx          # Top navigation
│   │   ├── footer.tsx          # Site footer
│   │   ├── hero-carousel.tsx   # Featured anime carousel
│   │   ├── anime-card.tsx      # Individual anime card
│   │   ├── anime-row.tsx       # Horizontal scrolling row
│   │   ├── anime-grid.tsx      # Responsive grid layout
│   │   └── loading-skeletons.tsx # Skeleton loaders
│   ├── theme-provider.tsx       # next-themes wrapper
│   └── theme-toggle.tsx         # Dark/Light mode toggle
├── services/
│   └── api.ts                   # API layer with mock data
├── lib/
│   └── utils.ts                 # Utility functions (cn)
└── hooks/                       # Custom React hooks (future)
```

## 🎨 Design System

### Theme Colors (CSS Variables)
All colors are defined in `app/globals.css` using HSL format:
- `--background`, `--foreground` - Base colors
- `--primary`, `--secondary` - Brand colors
- `--muted`, `--accent` - UI accents
- `--border`, `--input` - Form elements
- `--destructive` - Error states

### Typography
- **Font:** Inter (Google Fonts)
- **Tracking:** Tight tracking for titles
- **Hierarchy:** Clean, minimal text styles

### Spacing & Layout
- **Container:** Centered with max-width
- **Padding:** 2rem on mobile, responsive
- **Grid System:** CSS Grid with responsive breakpoints

## 🔧 Key Technologies

### Core Stack
- **Next.js 16.1.1** - App Router with React Server Components
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Shadcn/UI** - Accessible component primitives

### UI/UX Libraries
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library
- **next-themes** - Theme management
- **Radix UI** - Accessible primitives

## 🧩 Component Patterns

### Server Components (Default)
All components are Server Components by default for optimal performance.

### Client Components
Use `"use client"` directive for:
- Interactive components (Navbar, ThemeToggle)
- Components using hooks (useState, useEffect)
- Animation components (Framer Motion)

### Data Fetching
```typescript
// Server Component - Direct async/await
async function TrendingSection() {
  const trending = await api.getTrending();
  return <AnimeRow anime={trending} />;
}
```

### Loading States
Always wrap async components in Suspense with skeleton loaders:
```typescript
<Suspense fallback={<AnimeRowSkeleton />}>
  <TrendingSection />
</Suspense>
```

## 📡 API Service Layer

Located in `services/api.ts`, provides:
- Type-safe interfaces (`Anime`, `Episode`)
- Mock data for development
- Simulated network delays
- Easy-to-replace API functions

### Available API Methods
```typescript
api.getFeatured()      // Get featured anime for hero
api.getTrending()      // Get trending anime
api.getSeasonal()      // Get seasonal anime
api.getAnimeById(id)   // Get single anime details
api.getEpisodes(id)    // Get episodes for anime
api.search(query)      // Search anime
```

## 🎬 Home Page Structure

1. **Hero Carousel** - Auto-rotating featured anime with gradient overlays
2. **Trending Row** - Horizontal scrollable anime cards
3. **Seasonal Grid** - Responsive grid of current season anime

## 🚀 Next Steps

### To Implement
1. **Details Page** (`/anime/[id]`)
   - Anime information with blurred backdrop
   - Episode list
   - Related anime

2. **Watch Page** (`/watch/[id]`)
   - Theatre mode video player
   - Minimalist controls
   - Episode navigation

3. **Browse Page** (`/browse`)
   - Filter by genre, year, status
   - Infinite scroll
   - Advanced search

4. **Additional Features**
   - User authentication
   - Watchlist/Favorites
   - Continue watching
   - Video player with HLS support
   - Comments/Reviews

### Replacing Mock Data
In `services/api.ts`, replace the mock functions with real API calls:
```typescript
export const api = {
  async getTrending() {
    const response = await fetch('YOUR_API_URL/trending');
    return response.json();
  },
  // ... other methods
};
```

## 🎯 Design Philosophy Checklist

- ✅ **Minimalist UI** - Content-first, clean typography
- ✅ **Generous Whitespace** - Breathing room for content
- ✅ **Strict Grid System** - Consistent layout structure
- ✅ **Skeleton Loaders** - Perceived performance
- ✅ **No Layout Shifts** - Stable, predictable UI
- ✅ **Responsive Aspect Ratios** - Maintain image proportions
- ✅ **Smooth Transitions** - Polished interactions
- ✅ **Dark Mode First** - Default to dark theme

## 🛠️ Development Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📱 Responsive Breakpoints

```typescript
sm:  640px   // Small devices
md:  768px   // Medium devices
lg:  1024px  // Large devices
xl:  1280px  // Extra large
2xl: 1400px  // Container max-width
```

## 🎨 Color Reference

### Dark Mode (Default)
- Background: `240 10% 3.9%` (Near black)
- Foreground: `0 0% 98%` (Off white)
- Primary: `0 0% 98%` (White)
- Accent: `240 3.7% 15.9%` (Dark gray)

### Light Mode
- Background: `0 0% 100%` (White)
- Foreground: `240 10% 3.9%` (Near black)
- Primary: `240 5.9% 10%` (Dark)
- Accent: `240 4.8% 95.9%` (Light gray)

---

**Built with ❤️ for anime fans**
