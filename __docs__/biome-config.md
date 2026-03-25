# `@multi-app/biome-config`

Replaces ESLint + Prettier across the monorepo.

## Usage

Install the package in your app:

```jsonc
// package.json
{
  "devDependencies": {
    "@biomejs/biome": "^1.9.4",
    "@multi-app/biome-config": "workspace:*"
  }
}
```

Extend in your app's `biome.json`:

```jsonc
// apps/my-app/biome.json
{
  "$schema": "https://biomejs.dev/schemas/1.9.4/schema.json",
  "extends": ["@multi-app/biome-config/next"]  // or "@multi-app/biome-config" for base
}
```

## Available configs

| Export | File | Use for |
|--------|------|---------|
| `@multi-app/biome-config` | `biome.json` | Any TypeScript/JS project |
| `@multi-app/biome-config/next` | `next.json` | Next.js apps (adds React hook rules) |

## Rules overview

### Correctness (errors)
- `noUnusedVariables` — unused variables are errors
- `noUnusedImports` — unused imports are errors
- `useHookAtTopLevel` *(next only)* — hooks must be at top level

### Correctness (warnings)
- `useExhaustiveDependencies` — missing `useEffect` deps

### Style (errors)
- `useConst` — prefer `const` over `let` when not reassigned
- `useTemplate` — prefer template literals over string concatenation

### Style (warnings)
- `noNonNullAssertion` — avoid `!` non-null assertions

### Suspicious (warnings)
- `noExplicitAny` — avoid `any` type
- `noConsoleLog` — remove `console.log` before committing

### A11y
- All recommended accessibility rules enabled

## Formatter settings

| Setting | Value |
|---------|-------|
| Indent | 2 spaces |
| Line width | 100 |
| Line ending | LF |
| Quotes (JS) | double |
| Semicolons | always |
| Trailing commas | ES5 |

## Scripts

```bash
pnpm lint       # biome check . (lint + format check)
pnpm format     # biome format --write . (auto-format)
```

## Override a rule in your app

```jsonc
// apps/my-app/biome.json
{
  "extends": ["@multi-app/biome-config/next"],
  "linter": {
    "rules": {
      "suspicious": {
        "noConsoleLog": "off"
      }
    }
  }
}
```

## Ignore a file

```jsonc
{
  "files": {
    "ignore": ["src/generated/**"]
  }
}
```

## Inline disable

```ts
// biome-ignore lint/suspicious/noExplicitAny: external type
function handle(data: any) {}
```
