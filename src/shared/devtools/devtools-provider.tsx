/**
 * DevToolsProvider — Conditional rendering wrapper
 * ===================================================
 *
 * PATTERN: Environment-Aware Component
 * --------------------------------------
 * This provider renders DevTools ONLY in development mode.
 * It checks `process.env.NODE_ENV` at build time.
 *
 * In production builds, Next.js tree-shakes the entire DevTools
 * panel because the condition is always false. This means:
 * - ZERO bundle size impact in production
 * - No DevTools code shipped to users
 * - No need for separate dev/prod configurations
 *
 * LEARNING: Build-Time Constants
 * `process.env.NODE_ENV` is replaced by its value at build time
 * by webpack/turbopack. So `if ('production' !== 'development')`
 * is evaluated at compile time and the dead branch is removed.
 * This is called "Dead Code Elimination" (DCE).
 *
 * PATTERN: Provider Component Pattern
 * This component follows the Provider pattern — it wraps children
 * and injects functionality (DevTools panel) at the app root.
 * Adding new providers = adding items to the ProviderTree in
 * `root.provider.tsx`, not modifying existing components.
 */

'use client';

import type { ReactNode } from 'react';
import { DevToolsPanel } from './devtools-panel';

interface DevToolsProviderProps {
    children: ReactNode;
}

export function DevToolsProvider({ children }: DevToolsProviderProps) {
    const isDev = process.env.NODE_ENV === 'development';

    return (
        <>
            {children}
            {isDev && <DevToolsPanel />}
        </>
    );
}
