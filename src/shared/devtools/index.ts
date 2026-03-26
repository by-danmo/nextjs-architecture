/**
 * PATTERN: Barrel Export with Public API Curation
 * -------------------------------------------------
 * This index file defines the PUBLIC API of the devtools module.
 * Consumers import from '@/shared/devtools' — they never reach
 * into internal files directly.
 *
 * What we export:
 * - DevToolsProvider → for root.provider.tsx
 * - useDevLog → for any component that wants to log
 * - Store selectors → for components that need to read devtools state
 *
 * What we DON'T export:
 * - DevToolsPanel → internal, used only by the provider
 * - Store internals → consumers use selectors, not raw store
 */

// Provider — inject at app root
export { DevToolsProvider } from './devtools-provider';

// Hook — use in any component to log to DevTools console
export { useDevLog } from './use-dev-log';
export type { DevLogger } from './use-dev-log';

// Selectors — for components that read DevTools state
export {
    useDevToolsLayouts,
    useDevToolsTheme,
    useDevToolsConsole,
    useDevToolsPanel,
} from './devtools-store';

// Types — re-export for consumers
export type {
    LogLevel,
    LogEntry,
    DevToolsTab,
    AuthLayoutMode,
} from './devtools-store';
