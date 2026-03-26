# Architecture Documentation

## Project Stack
- **Framework**: Next.js 16 (App Router, Turbopack)
- **React**: 19 (Server + Client Components)
- **Styling**: Tailwind CSS v4 (CSS-based `@theme` config)
- **Animation**: Motion (Framer Motion v12)
- **State**: Zustand v5
- **UI Primitives**: Radix UI
- **Forms**: react-hook-form + Zod
- **Linting**: Biome

---

## Directory Structure

```
src/
├── app/                          # Next.js App Router (routes)
│   ├── (auth)/auth/              # Auth pages (login, forgot-password)
│   ├── (dashboard)/dashboard/    # Dashboard pages
│   ├── globals.css               # Design System (@theme tokens)
│   └── layout.tsx                # Root layout (Server Component)
│
├── features/                     # Feature modules (domain logic)
│   ├── auth/
│   │   ├── components/           # Auth UI components (LoginForm, etc.)
│   │   ├── layouts/              # Visual layout components (Split, Centered)
│   │   ├── schemas/              # Zod validation schemas
│   │   └── views/                # Page-level compositions
│   └── dashboard/
│       ├── components/           # Sidebar, Header
│       └── layouts/              # DashboardLayout
│
├── shared/                       # Shared across all features
│   ├── components/ui/            # Reusable UI primitives
│   ├── devtools/                 # In-app DevTools (dev-only)
│   ├── hooks/                    # Custom hooks
│   ├── stores/                   # Zustand stores
│   └── context/                  # React Context providers
│
├── providers/                    # App-level providers (root.provider.tsx)
├── config/                       # App configuration
├── lib/                          # Utilities, API clients
└── types/                        # Global TypeScript types
```

---

## Key Patterns & Concepts

### 1. Tailwind CSS v4 — `@theme` Tokens (no `tailwind.config.ts`)
Tokens are defined in `globals.css` via the `@theme` directive. They become both CSS variables AND Tailwind classes automatically.

```css
@theme {
    --color-primary: #0a0a0a;    /* → bg-primary, text-primary */
    --font-size-h1: clamp(...);  /* → text-h1 (fluid typography) */
    --radius-lg: 1.2rem;         /* → rounded-lg */
}
```

### 2. Fluid Typography with `clamp()`
Responsive font sizes without media queries:
```css
--font-size-h1: clamp(2.8rem, 2.4rem + 1vw, 4.8rem);
/* min: 2.8rem | preferred: scales with viewport | max: 4.8rem */
```

### 3. Zustand `useShallow` for Object Selectors
When selectors return objects, use `useShallow` to prevent infinite re-renders:
```ts
// ❌ BAD — creates new object reference every update
useStore((s) => ({ a: s.a, b: s.b }))

// ✅ GOOD — shallow-compares each property
useStore(useShallow((s) => ({ a: s.a, b: s.b })))
```

### 4. `as const` for Framer Motion Ease Arrays
TypeScript infers `[0.4, 0, 0.2, 1]` as `number[]`, but Motion expects a tuple. Use `as const`:
```ts
ease: [0.4, 0, 0.2, 1] as const  // → readonly [0.4, 0, 0.2, 1]
```

### 5. Server/Client Component Boundaries
- **Server Components** (default): Route layouts, metadata, data fetching
- **Client Components** (`'use client'`): Interactive UI, hooks, animations

Rule: push `'use client'` **as far down the tree as possible**.

### 6. Barrel Exports (index.ts)
Each module exposes a curated public API via `index.ts`:
```ts
// ✅ Clean import
import { AuthSplitLayout } from '@/features/auth/layouts'

// ❌ Avoid internal paths
import { AuthSplitLayout } from '@/features/auth/layouts/auth-split-layout'
```

### 7. Data-Driven Navigation
Navigation items are arrays of config objects, not hard-coded JSX:
```ts
const NAV_ITEMS: NavItem[] = [
    { label: 'Dashboard', href: '/dashboard', icon: Home },
    // Add new page = add one object. Zero component changes.
];
```

### 8. DevTools — Environment-Aware Components
`DevToolsProvider` only renders in dev. Production builds tree-shake it entirely:
```tsx
const isDev = process.env.NODE_ENV === 'development';
return <>{children}{isDev && <DevToolsPanel />}</>;
```

---

## File Conventions

| Pattern | Example | Purpose |
|---------|---------|---------|
| Route layout | `app/(auth)/auth/layout.tsx` | Wraps route segment pages |
| Feature layout | `features/auth/layouts/auth-split-layout.tsx` | Visual layout component |
| Feature component | `features/dashboard/components/sidebar.tsx` | Domain-specific UI |
| Shared UI | `shared/components/ui/button.tsx` | Reusable primitives |
| Store | `shared/stores/ui.store.ts` | Global state management |
| Feature store | `shared/devtools/devtools-store.ts` | Feature-scoped state |
| Barrel export | `features/auth/layouts/index.ts` | Public API entry point |
