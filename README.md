# StreamIt - Anime Streaming Platform

A modern, minimalist anime streaming web application built with Next.js 16.1.1, featuring an "Invisible UI" design philosophy that puts content first.

## Tech Stack

- **Framework:** Next.js 16.1.1 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **UI Library:** Shadcn/UI
- **Icons:** Lucide React
- **State Management:** Zustand
- **Animation:** Framer Motion
- **Theme:** next-themes (Light/Dark mode)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design Philosophy

- **Invisible UI**: Minimalist design that focuses 100% on anime content
- **Mobile-first**: Responsive design with strict aspect ratios
- **Performance**: Skeleton loaders and zero layout shifts
- **Accessibility**: Built with Radix UI primitives

## Project Structure

```
├── app/                    # Next.js App Router pages
├── components/
│   ├── ui/                # Base Shadcn/UI primitives
│   └── features/          # Feature-specific components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities and helpers
└── services/              # API layer
```
