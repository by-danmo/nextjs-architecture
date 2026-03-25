# Storybook

Component documentation and visual testing. Configured per-app inside `apps/web/.storybook/`.

## Run

```bash
cd apps/web
pnpm storybook          # dev server on port 6006
pnpm build-storybook    # static build → storybook-static/
```

## Configuration

| File | Purpose |
|------|---------|
| `apps/web/.storybook/main.ts` | Framework, addons, story glob |
| `apps/web/.storybook/preview.ts` | Global decorators, CSS import, parameters |

Stories are discovered by the glob `src/**/*.stories.@(ts|tsx)` — place story files next to the component.

## Write a story (CSF3)

```tsx
// src/shared/components/ui/button.stories.tsx
import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],   // auto-generates docs page
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "default",
  },
};
```

## Addons

| Addon | What it does |
|-------|-------------|
| `@storybook/addon-docs` | Auto-docs from JSDoc + `tags: ["autodocs"]` |
| `@storybook/addon-a11y` | Accessibility audit panel |
| `@storybook/addon-vitest` | Run component tests inside Storybook |

## Story file naming conventions

```
src/
  shared/
    components/
      ui/
        button.tsx
        button.stories.tsx   ← story next to component
  features/
    auth/
      components/
        sign-in-form.tsx
        sign-in-form.stories.tsx
```

## argTypes for controls

```tsx
argTypes: {
  variant: {
    control: "select",
    options: ["default", "destructive", "outline"],
  },
  disabled: { control: "boolean" },
  label: { control: "text" },
},
```

## Decorators

Add global decorators in `preview.ts`:

```ts
import type { Preview } from "@storybook/nextjs";
import "../src/app/globals.css";

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="p-8">
        <Story />
      </div>
    ),
  ],
};
```
