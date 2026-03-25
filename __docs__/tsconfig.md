# `@multi-app/typescript-config`

Shared TypeScript configuration presets.

## Available presets

| File | Use for |
|------|---------|
| `base.json` | Generic TypeScript library |
| `nextjs.json` | Next.js applications |
| `react-library.json` | React component libraries |
| `nestjs.json` | NestJS backend apps |

## Usage

```jsonc
// apps/web/tsconfig.json
{
  "extends": "@multi-app/typescript-config/nextjs.json",
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

## Preset details

### `base.json`
- `strict: true`, `noUncheckedIndexedAccess: true`
- `module: NodeNext`, `moduleResolution: NodeNext`
- `target: ES2022`
- Enables `declaration`, `declarationMap`, `resolveJsonModule`

### `nextjs.json` (extends base)
- `module: ESNext`, `moduleResolution: Bundler`
- `jsx: preserve`, `noEmit: true`, `allowJs: true`
- Includes Next.js TypeScript plugin

### `react-library.json` (extends base)
- `jsx: react-jsx`
- Outputs to `dist/` with declarations

### `nestjs.json` (extends base)
- Decorator support enabled
- CommonJS module output

## Path aliases for workspace packages

Add these to your `tsconfig.json` to get full inference from workspace packages:

```jsonc
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"],
      "@multi-app/shared/*": ["../../packages/shared/src/*"],
      "@multi-app/lib/*": ["../../packages/lib/src/*"]
    }
  }
}
```

This gives you **go-to-definition**, **hover types**, and **auto-import** directly from source — no build step needed.
