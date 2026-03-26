/**
 * PATTERN: Barrel Export
 * ----------------------
 * A barrel file re-exports everything from a directory through a single `index.ts`.
 * This creates clean import paths:
 *
 *   import { AuthSplitLayout } from '@/features/auth/layouts'
 *
 * Instead of:
 *   import { AuthSplitLayout } from '@/features/auth/layouts/auth-split-layout'
 *
 * RULE: Only export what consumers need. Keep internal helpers private.
 */

export { AuthSplitLayout } from './auth-split-layout';
export type { AuthSplitLayoutProps } from './auth-split-layout';

export { AuthCenteredLayout } from './auth-centered-layout';
export type { AuthCenteredLayoutProps, AuthCenteredEffects } from './auth-centered-layout';
