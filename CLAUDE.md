# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Boothly is a public website for a service providing private, soundproof meeting spaces in transit hubs (initially launching in London). This is a single-page React application built with Vite, designed from a Figma prototype.

Original design: https://www.figma.com/design/znNXs8nernlPTCYf78Ret3/Boothly

## Development Commands

### Setup
```bash
npm i
```

### Development Server
```bash
npm run dev
```
Starts Vite dev server on port 3000, automatically opens browser.

### Build
```bash
npm run build
```
Builds production bundle to `build/` directory.

## Deployment

### Netlify
This site is configured for Netlify deployment via `netlify.toml`:
- Build command: `npm run build`
- Publish directory: `build/`
- SPA routing: All routes redirect to `/index.html` (200 status)

To deploy:
1. Connect repository to Netlify
2. Netlify will auto-detect settings from `netlify.toml`
3. Push to main branch triggers automatic deployment

## Architecture & Key Patterns

### Tech Stack
- **Build Tool**: Vite 6.3.5 with React SWC plugin
- **Framework**: React 18.3.1 (no routing - single page app)
- **Styling**: Tailwind CSS v4.1.3 (inline utility classes)
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: lucide-react

### Project Structure
```
src/
├── App.tsx                    # Main single-page component (all sections)
├── main.tsx                   # React entry point
├── index.css                  # Tailwind base + custom CSS variables
├── components/
│   ├── ui/                    # Reusable Radix-based UI components
│   │   ├── utils.ts           # cn() utility (clsx + tailwind-merge)
│   │   └── [component].tsx    # Individual UI components
│   └── figma/                 # Figma-specific utilities
│       └── ImageWithFallback.tsx
└── assets/                    # Static assets (images)
```

### Component Architecture

**App.tsx** is a monolithic component containing all page sections:
- Navigation (sticky header with mobile menu)
- Hero Section
- Problem/Solution Section
- How It Works Section (3 steps)
- Features Section (6 features)
- Early Access Section (Coming Soon)
- CTA Section
- Footer with Contact Info

Navigation uses smooth scrolling via `scrollToSection()` helper. Mobile menu state managed with `useState`.

### Styling System

Uses **Tailwind CSS v4** with custom CSS variables in `src/index.css`:
- CSS variables for theming (`--background`, `--foreground`, `--primary`, etc.)
- Light/dark mode support via `.dark` class
- Custom spacing unit: `--spacing: .25rem` (multiply by N for spacing-N)
- Custom radius: `--radius: .625rem`
- Base font size: `--font-size: 14px`

Color palette (defined at `:root`):
- Primary: `#030213` (dark blue-black)
- Secondary: `oklch(.95 .0058 264.53)` (light purple-gray)
- Muted: `#ececf0` (light gray)
- Accent: `#e9ebef` (slightly darker gray)

**cn() utility** (`src/components/ui/utils.ts`): Combines clsx and tailwind-merge for conditional class merging.

### Asset Handling

Figma assets are imported via special alias in `vite.config.ts`:
```ts
'figma:asset/[hash].png': path.resolve(__dirname, './src/assets/[hash].png')
```

Import Figma assets as: `import logo from 'figma:asset/[hash].png'`

### Path Aliases

`@` alias points to `./src` (configured in vite.config.ts):
```ts
import { Button } from '@/components/ui/button'
```

### Responsive Design

Mobile-first approach with breakpoints:
- `sm`: 40rem (640px)
- `md`: 48rem (768px)
- `lg`: 64rem (1024px)
- `xl`: 80rem (1280px)
- `2xl`: 96rem (1536px)

Most components use grid layouts that adapt:
- Mobile: single column
- Tablet: 2-3 columns
- Desktop: 2-3 columns with larger gaps

### UI Component Library

Pre-built Radix UI components in `src/components/ui/`:
- All styled with Tailwind utilities
- Follow consistent variant patterns using `class-variance-authority`
- Import and use as-is; avoid modifying unless necessary

Common components: button, card, dialog, dropdown-menu, navigation-menu, separator, tabs, tooltip, etc.

## Development Guidelines

### Component Modifications
- Main app logic lives in `App.tsx` - edit this for content/layout changes
- Preserve responsive breakpoints and mobile menu functionality
- Keep smooth scrolling behavior for navigation links

### Styling Guidelines
- Use existing CSS variables for colors (don't hardcode)
- Follow existing spacing patterns (`calc(var(--spacing) * N)`)
- Maintain mobile-first responsive design
- Use `cn()` utility for conditional classes

### Asset Management
- Place new images in `src/assets/`
- Use the Figma asset alias pattern if importing from Figma exports
- Optimize images before committing

### Contact Information
Primary contact email: hello@boothlyworks.com
Location reference: London, UK (Q4 launch target)
