/**
 * DevTools Store — Zustand store for developer tools state
 * =========================================================
 *
 * PATTERN: Feature-Scoped Store
 * ------------------------------
 * Unlike `ui.store.ts` which is app-wide, this store is SCOPED
 * to the DevTools feature. This is a key architectural decision:
 *
 *   - Global state (sidebar, theme) → `ui.store.ts`
 *   - Feature state (devtools panel) → `devtools-store.ts`
 *
 * PATTERN: Zustand Slice Pattern (Simplified)
 * --------------------------------------------
 * We keep actions and state in the SAME store for simplicity.
 * For larger apps, you'd split into "slices" using Zustand's
 * slice pattern (separate state + actions + selectors objects).
 *
 * PATTERN: Discriminated Union for Log Levels
 * --------------------------------------------
 * The `LogEntry.level` uses a TypeScript union type, not an enum.
 * Union types are:
 * - Tree-shakeable (enums generate JS code)
 * - More idiomatic in modern TypeScript
 * - Work better with `switch` exhaustiveness checking
 *
 * LEARNING: `satisfies` operator
 * We use `as const satisfies` to get both:
 * 1. Literal type inference (exact string values)
 * 2. Type checking (catches typos in tab names)
 */

import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

/* --------------------------------------------------------------------------
 * Types
 * -------------------------------------------------------------------------- */

/** Log levels mirror console API but as a union type, not enum */
export type LogLevel = 'log' | 'info' | 'warn' | 'error';

export interface LogEntry {
    id: string;
    level: LogLevel;
    message: string;
    timestamp: number;
    /** Optional data payload (serialized for display) */
    data?: string;
}

/** Available tabs in the DevTools panel */
export type DevToolsTab = 'layouts' | 'theme' | 'dashboard' | 'console';

/** Auth layout switcher options */
export type AuthLayoutMode = 'split' | 'centered';

/* --------------------------------------------------------------------------
 * Store Interface
 * -------------------------------------------------------------------------- */

interface DevToolsState {
    // Panel state
    isOpen: boolean;
    activeTab: DevToolsTab;

    // Layout switcher
    authLayout: AuthLayoutMode;

    // Theme switcher
    currentTheme: string;
    availableThemes: string[];

    // Console logs
    logs: LogEntry[];
    maxLogs: number;

    // Actions
    togglePanel: () => void;
    setActiveTab: (tab: DevToolsTab) => void;
    setAuthLayout: (layout: AuthLayoutMode) => void;
    setTheme: (theme: string) => void;
    addLog: (level: LogLevel, message: string, data?: unknown) => void;
    clearLogs: () => void;
}

/* --------------------------------------------------------------------------
 * PATTERN: ID Generator
 * ----------------------
 * Using a simple counter for log IDs instead of `crypto.randomUUID()`
 * or `Math.random().toString(36)`.
 *
 * WHY? Performance. In a logger that might fire hundreds of times,
 * a counter is O(1) with zero allocation, vs UUID which allocates
 * a string and does crypto operations.
 * -------------------------------------------------------------------------- */
let logIdCounter = 0;
function generateLogId(): string {
    return `log-${++logIdCounter}`;
}

/**
 * PATTERN: Safe JSON Serialization
 * ---------------------------------
 * `JSON.stringify` throws on circular references.
 * This wrapper catches that and falls back to toString().
 * Always handle the unhappy path in utility functions.
 */
function safeStringify(data: unknown): string {
    try {
        return JSON.stringify(data, null, 2);
    } catch {
        return String(data);
    }
}

/* --------------------------------------------------------------------------
 * Store
 * -------------------------------------------------------------------------- */

export const useDevToolsStore = create<DevToolsState>()((set) => ({
    // Initial state
    isOpen: false,
    activeTab: 'layouts',
    authLayout: 'split',
    currentTheme: 'default',
    availableThemes: ['default', 'dark', 'ocean'],
    logs: [],
    maxLogs: 200,

    // Actions
    togglePanel: () => set((state) => ({ isOpen: !state.isOpen })),

    setActiveTab: (tab) => set({ activeTab: tab }),

    setAuthLayout: (layout) => set({ authLayout: layout }),

    setTheme: (theme) => set({ currentTheme: theme }),

    /**
     * PATTERN: Bounded Collection
     * ----------------------------
     * We cap logs at `maxLogs` to prevent memory leaks.
     * When the limit is reached, we drop the OLDEST entries (FIFO).
     * This is done with `.slice(-maxLogs)` which keeps the last N items.
     */
    addLog: (level, message, data) =>
        set((state) => {
            const newLog: LogEntry = {
                id: generateLogId(),
                level,
                message,
                timestamp: Date.now(),
                data: data !== undefined ? safeStringify(data) : undefined,
            };

            const updatedLogs = [...state.logs, newLog].slice(-state.maxLogs);
            return { logs: updatedLogs };
        }),

    clearLogs: () => set({ logs: [] }),
}));

/* --------------------------------------------------------------------------
 * Selectors
 * --------------------------------------------------------------------------
 * PATTERN: Selector Functions
 * ----------------------------
 * Selectors extract specific pieces of state. This:
 * 1. Prevents unnecessary re-renders (component only re-renders
 *    when the SELECTED slice changes, not the whole store)
 * 2. Centralizes state access patterns
 * 3. Makes refactoring easier (change store shape → update selectors)
 * -------------------------------------------------------------------------- */

/**
 * PATTERN: useShallow for Object-Returning Selectors
 * ---------------------------------------------------
 * When a selector returns an object `(s) => ({ ... })`, Zustand
 * compares by REFERENCE. Since `{} !== {}` in JavaScript, a new
 * object is created on every store update → infinite re-renders.
 *
 * `useShallow` fixes this by comparing each property INDIVIDUALLY
 * (shallow equality). Re-render only happens when a property value
 * actually changes.
 *
 * RULE OF THUMB:
 * - Selecting a single primitive? No useShallow needed:
 *     `useStore((s) => s.count)` ✅
 * - Selecting multiple values as an object? Use useShallow:
 *     `useStore(useShallow((s) => ({ count: s.count })))` ✅
 */
export const useDevToolsPanel = () =>
    useDevToolsStore(useShallow((s) => ({
        isOpen: s.isOpen,
        activeTab: s.activeTab,
        togglePanel: s.togglePanel,
        setActiveTab: s.setActiveTab,
    })));

export const useDevToolsLayouts = () =>
    useDevToolsStore(useShallow((s) => ({
        authLayout: s.authLayout,
        setAuthLayout: s.setAuthLayout,
    })));

export const useDevToolsTheme = () =>
    useDevToolsStore(useShallow((s) => ({
        currentTheme: s.currentTheme,
        availableThemes: s.availableThemes,
        setTheme: s.setTheme,
    })));

export const useDevToolsConsole = () =>
    useDevToolsStore(useShallow((s) => ({
        logs: s.logs,
        clearLogs: s.clearLogs,
    })));
