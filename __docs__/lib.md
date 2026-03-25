# `@multi-app/lib`

Shared utilities, auth, API client, Zustand stores, and validations.

## TypeScript path alias

```jsonc
// tsconfig.json paths
"@multi-app/lib/*": ["../../packages/lib/src/*"]
```

## Modules

### `@multi-app/lib/auth`

Auth client built on `better-auth`.

```ts
import { authClient } from "@multi-app/lib/auth";
import { useSession, useSignIn, useSignOut } from "@multi-app/lib/auth";

// Check session
const { data: session } = useSession();

// Sign in
const { signIn } = useSignIn();
await signIn.email({ email, password });

// Sign out
const { signOut } = useSignOut();
```

### `@multi-app/lib/api`

Axios-based API client with error utilities.

```ts
import { apiClient } from "@multi-app/lib/api";
import { handleApiError } from "@multi-app/lib/api";

const data = await apiClient.get("/users");
```

### `@multi-app/lib/stores`

Zustand stores for UI state.

```ts
import { useUIStore } from "@multi-app/lib/stores";
import { useModalStore } from "@multi-app/lib/stores";
import { useDrawerStore } from "@multi-app/lib/stores";

const { openModal, closeModal } = useModalStore();
const { openDrawer } = useDrawerStore();
```

### `@multi-app/lib/utils`

Utility functions.

```ts
import { cn } from "@multi-app/lib/utils";
import { formatDate, formatCurrency } from "@multi-app/lib/utils";

// Merge Tailwind classes
const cls = cn("base-class", condition && "conditional-class");
```

### `@multi-app/lib/validations`

Zod schemas for common forms.

```ts
import { authSchemas } from "@multi-app/lib/validations";
import { profileSchemas } from "@multi-app/lib/validations";
import { commonSchemas } from "@multi-app/lib/validations";
```

### `@multi-app/lib/constants`

App-wide constants and route definitions.

```ts
import { APP_CONSTANTS } from "@multi-app/lib/constants";
import { ROUTES } from "@multi-app/lib/constants";
```
