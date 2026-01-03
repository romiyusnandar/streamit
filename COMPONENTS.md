# Component Reference

## UI Components (`components/ui/`)

These are base Shadcn/UI components - reusable primitives.

### Button
**Path:** `components/ui/button.tsx`
**Usage:**
```tsx
import { Button } from "@/components/ui/button";

<Button variant="default" size="lg">Click Me</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost" size="icon"><Icon /></Button>
```
**Variants:** default, destructive, outline, secondary, ghost, link
**Sizes:** default, sm, lg, icon

### Card
**Path:** `components/ui/card.tsx`
**Usage:**
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content here</CardContent>
  <CardFooter>Footer actions</CardFooter>
</Card>
```

### Input
**Path:** `components/ui/input.tsx`
**Usage:**
```tsx
import { Input } from "@/components/ui/input";

<Input type="text" placeholder="Search..." />
<Input type="email" className="w-full" />
```

### Skeleton
**Path:** `components/ui/skeleton.tsx`
**Usage:**
```tsx
import { Skeleton } from "@/components/ui/skeleton";

<Skeleton className="h-12 w-full" />
<Skeleton className="aspect-[2/3] rounded-lg" />
```

### Separator
**Path:** `components/ui/separator.tsx`
**Usage:**
```tsx
import { Separator } from "@/components/ui/separator";

<Separator />
<Separator orientation="vertical" />
```

---

## Feature Components (`components/features/`)

Application-specific, composed components.

### Navbar
**Path:** `components/features/navbar.tsx`
**Type:** Client Component
**Features:**
- Responsive navigation
- Expandable search bar
- Theme toggle
- Mobile menu (hamburger)

### Footer
**Path:** `components/features/footer.tsx`
**Type:** Server Component
**Features:**
- Multi-column link layout
- Responsive grid
- Social links
- Copyright info

### HeroCarousel
**Path:** `components/features/hero-carousel.tsx`
**Type:** Client Component
**Props:**
```tsx
interface HeroCarouselProps {
  featured: Anime[];
}
```
**Features:**
- Auto-rotating carousel (5s intervals)
- Gradient overlays
- Framer Motion animations
- Carousel indicators
- CTA buttons (Watch Now, More Info)

### AnimeCard
**Path:** `components/features/anime-card.tsx`
**Type:** Client Component
**Props:**
```tsx
interface AnimeCardProps {
  anime: Anime;
  index: number; // For staggered animations
}
```
**Features:**
- Hover effects (scale, play icon)
- Rating badge
- Status badge (ongoing/completed)
- Responsive image
- Staggered fade-in animation

### AnimeRow
**Path:** `components/features/anime-row.tsx`
**Type:** Client Component
**Props:**
```tsx
interface AnimeRowProps {
  title: string;
  anime: Anime[];
  href?: string; // Optional "View all" link
}
```
**Features:**
- Horizontal scroll
- Hidden scrollbar
- Snap scrolling
- "View all" button
- Responsive card sizing

### AnimeGrid
**Path:** `components/features/anime-grid.tsx`
**Type:** Client Component
**Props:**
```tsx
interface AnimeGridProps {
  title: string;
  anime: Anime[];
}
```
**Features:**
- Responsive grid (2-6 columns)
- Consistent card spacing
- Section title

### Loading Skeletons
**Path:** `components/features/loading-skeletons.tsx`
**Type:** Server Component
**Exports:**
- `HeroSkeleton` - Matches hero carousel layout
- `AnimeCardSkeleton` - Single card skeleton
- `AnimeRowSkeleton` - Row with 6 cards
- `AnimeGridSkeleton` - Grid with 12 cards

**Usage:**
```tsx
<Suspense fallback={<HeroSkeleton />}>
  <AsyncComponent />
</Suspense>
```

---

## Theme Components

### ThemeProvider
**Path:** `components/theme-provider.tsx`
**Type:** Client Component
**Usage:** Wraps app in `app/layout.tsx`
```tsx
<ThemeProvider
  attribute="class"
  defaultTheme="dark"
  enableSystem
  disableTransitionOnChange
>
  {children}
</ThemeProvider>
```

### ThemeToggle
**Path:** `components/theme-toggle.tsx`
**Type:** Client Component
**Features:**
- Sun/Moon icon toggle
- Smooth rotation animation
- Mounted check (prevents hydration issues)

---

## Creating New Components

### Server Component Template
```tsx
// components/features/my-component.tsx
import { ComponentProps } from "@/types";

export function MyComponent({ prop }: ComponentProps) {
  return (
    <div className="container">
      {/* Your content */}
    </div>
  );
}
```

### Client Component Template
```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export function MyInteractiveComponent() {
  const [state, setState] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Your content */}
    </motion.div>
  );
}
```

---

## Best Practices

### 1. Component Organization
- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use composition over complex props

### 2. Styling
- Use Tailwind classes with the `cn()` utility
- Group related classes (layout, spacing, colors)
- Use responsive variants (`md:`, `lg:`)

### 3. Performance
- Default to Server Components
- Use Client Components only when needed:
  - Event handlers (onClick, onChange)
  - React hooks (useState, useEffect)
  - Browser APIs
  - Animation libraries

### 4. Accessibility
- Use semantic HTML
- Include `aria-label` for icon buttons
- Ensure keyboard navigation
- Maintain color contrast ratios

### 5. Responsive Design
- Mobile-first approach
- Use responsive Tailwind variants
- Test at all breakpoints
- Ensure touch-friendly targets (min 44px)

---

## Common Patterns

### Loading Pattern
```tsx
async function DataComponent() {
  const data = await fetchData();
  return <Component data={data} />;
}

// In parent
<Suspense fallback={<ComponentSkeleton />}>
  <DataComponent />
</Suspense>
```

### Conditional Rendering
```tsx
{isLoading && <Skeleton />}
{!isLoading && data && <Content data={data} />}
{error && <ErrorMessage error={error} />}
```

### List Rendering
```tsx
{items.map((item, index) => (
  <Component
    key={item.id}
    item={item}
    index={index}
  />
))}
```

### Responsive Layout
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => <Card key={item.id} {...item} />)}
</div>
```

---

**Need to add a new component?**
1. Create file in appropriate directory (`ui/` or `features/`)
2. Export from component file
3. Import where needed with `@/` alias
4. Add to this reference if it's a major component
