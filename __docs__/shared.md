# `@multi-app/shared`

Reusable UI components built on Radix UI primitives with Tailwind CSS v4.

## TypeScript path alias

```jsonc
// tsconfig.json paths
"@multi-app/shared/*": ["../../packages/shared/src/*"]
```

## Import pattern

All subpaths resolve directly to source — full inference, no build step:

```ts
import { Button } from "@multi-app/shared/ui";
import { Input } from "@multi-app/shared/ui";
import { DataTable } from "@multi-app/shared/admin-auth/components/dashboard";
```

## Component categories

### `@multi-app/shared/ui`

Core UI primitives.

```ts
import {
  Button,
  Input,
  Badge,
  Checkbox,
  Dialog,
  Drawer,
  Accordion,
  Pagination,
  Slider,
  SearchInput,
  Title,
  Logo,
  UserInfo,
  StatsGrid,
  QuantityControl,
  InputOtp,
  GlobalDrawer,
  GlobalModal,
  GlobalDrawerProvider,
  GlobalModalProvider,
} from "@multi-app/shared/ui";
```

### `@multi-app/shared/forms`

Form primitives.

```ts
import { Form, FormField, FormItem, FormLabel, FormMessage } from "@multi-app/shared/forms";
```

### `@multi-app/shared/feedback`

State feedback components.

```ts
import { Callout, EmptyState, ErrorBoundary, Loading, Skeleton } from "@multi-app/shared/feedback";
```

### `@multi-app/shared/layout`

Layout helpers.

```ts
import { Container, Flex, Header, Footer, ShouldShow } from "@multi-app/shared/layout";
```

### `@multi-app/shared/icons`

Icon components.

```ts
import { Spinner, ErrorIcon } from "@multi-app/shared/icons";
```

### `@multi-app/shared/cards`

Card components.

```ts
import { ... } from "@multi-app/shared/cards";
```

### `@multi-app/shared/sections`

Page section components.

```ts
import { Hero } from "@multi-app/shared/sections";
```

### `@multi-app/shared/admin-auth`

Admin dashboard components (sidebar, data table, layout).

```ts
import { Sidebar, SidebarNavigation } from "@multi-app/shared/admin-auth/components/sidebar";
import { DataTable } from "@multi-app/shared/admin-auth/components/dashboard";
import { AdminLayout } from "@multi-app/shared/admin-auth/layout";
```

## Global styles

Import shared Tailwind styles in your app:

```ts
// In your root layout or global CSS
import "@multi-app/shared/styles.css";
```
