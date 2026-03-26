/**
 * DevToolsPanel — Floating developer tools panel
 * =================================================
 *
 * PATTERN: Compound Component Architecture
 * ------------------------------------------
 * This panel is composed of small, focused sub-components:
 *   - `DevToolsTrigger` (the pill button)
 *   - `DevToolsContent` (the panel body)
 *   - `TabLayoutSwitcher`, `TabThemeSwitcher`, `TabConsole`, etc.
 *
 * Each tab is its own component. Adding a new tab = one new component
 * + one entry in the TABS array. Zero changes to existing code.
 * This is the Open/Closed Principle (open for extension, closed for modification).
 *
 * PATTERN: AnimatePresence for Mount/Unmount Animations
 * Framer Motion's `AnimatePresence` lets us animate components
 * as they're REMOVED from the React tree. Without it, the panel
 * would just disappear instantly when closed.
 *
 * PATTERN: Portal-Free Overlay
 * We don't use a React Portal here. The panel is positioned with
 * `fixed` CSS, which already escapes the layout flow. Portals are
 * only needed when you must escape a `overflow:hidden` ancestor or
 * a specific stacking context.
 */

'use client';

import {
    Layout,
    LayoutDashboard,
    Palette,
    Terminal,
    Trash2,
    Wrench,
    X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { ReactNode, useEffect, useRef } from 'react';
import {
    useDevToolsConsole,
    useDevToolsLayouts,
    useDevToolsPanel,
    useDevToolsTheme,
    type AuthLayoutMode,
    type DevToolsTab,
    type LogEntry
} from './devtools-store';

/* --------------------------------------------------------------------------
 * PATTERN: Configuration-Driven Tabs
 * ------------------------------------
 * Tabs are data, not hard-coded JSX. Each tab is an object with:
 * - `id`: unique key matching the DevToolsTab union type
 * - `label`: display name
 * - `icon`: Lucide icon component
 *
 * To add a new tab, add an object here + create a TabContent component.
 * -------------------------------------------------------------------------- */
const TABS: { id: DevToolsTab; label: string; icon: typeof Layout }[] = [
    { id: 'layouts', label: 'Layouts', icon: Layout },
    { id: 'theme', label: 'Theme', icon: Palette },
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'console', label: 'Console', icon: Terminal }
];

/* --------------------------------------------------------------------------
 * Main Panel Component
 * -------------------------------------------------------------------------- */

export function DevToolsPanel() {
    const { isOpen, togglePanel } = useDevToolsPanel();

    return (
        <>
            {/* Floating trigger button */}
            <DevToolsTrigger isOpen={isOpen} onToggle={togglePanel} />

            {/* Panel with enter/exit animation */}
            <AnimatePresence>{isOpen && <DevToolsContent />}</AnimatePresence>
        </>
    );
}

/* --------------------------------------------------------------------------
 * Trigger Button — The floating pill
 * --------------------------------------------------------------------------
 * PATTERN: Micro-Interaction on Hover
 * The button scales slightly on hover and has a spring animation.
 * These small touches make the UI feel alive and responsive.
 * -------------------------------------------------------------------------- */

function DevToolsTrigger({
    isOpen,
    onToggle
}: {
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <motion.button
            type="button"
            onClick={onToggle}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 left-1/2 z-devtools flex -translate-x-1/2 items-center gap-2 rounded-pill bg-neutral-900 px-5 py-2.5 text-[1.2rem] font-medium text-white shadow-xl transition-colors hover:bg-neutral-800"
            aria-label={isOpen ? 'Close DevTools' : 'Open DevTools'}
        >
            <Wrench size={14} />
            <span>DevTools</span>
        </motion.button>
    );
}

/* --------------------------------------------------------------------------
 * Panel Content — The sliding panel
 * -------------------------------------------------------------------------- */

function DevToolsContent() {
    const { activeTab, setActiveTab, togglePanel } = useDevToolsPanel();

    return (
        <motion.div
            /**
             * PATTERN: Animation Lifecycle
             * `initial` → state when mounting (start of enter animation)
             * `animate` → target state (end of enter animation)
             * `exit` → state when unmounting (end of exit animation)
             *
             * AnimatePresence detects when this component leaves the
             * tree and plays the `exit` animation before removing it.
             */
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-20 left-1/2 z-devtools w-[90vw] max-w-226 -translate-x-1/2 overflow-hidden rounded-2xl border border-neutral-200 bg-surface shadow-2xl"
        >
            {/* Panel header */}
            <div className="flex items-center justify-between border-b border-neutral-200 px-5 py-3">
                <div className="flex items-center gap-2">
                    <Wrench size={16} className="text-accent" />
                    <span className="text-[1.4rem] font-semibold text-neutral-800">
                        DevTools
                    </span>
                    <span className="rounded-md bg-accent/10 px-2 py-0.5 text-[1rem] font-medium text-accent">
                        DEV
                    </span>
                </div>
                <button
                    type="button"
                    onClick={togglePanel}
                    className="flex-full-center size-8 rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
                    aria-label="Close DevTools"
                >
                    <X size={16} />
                </button>
            </div>

            {/* Tab bar */}
            <div className="flex gap-1 border-b border-neutral-100 px-4 py-2">
                {TABS.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;

                    return (
                        <button
                            key={tab.id}
                            type="button"
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[1.2rem] font-medium transition-colors ${
                                isActive
                                    ? 'bg-accent/10 text-accent'
                                    : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-700'
                            }`}
                        >
                            <Icon size={14} />
                            <span>{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Tab content */}
            <div className="max-h-160 overflow-y-auto p-5 scrollbar-thin">
                <TabRouter activeTab={activeTab} />
            </div>
        </motion.div>
    );
}

/* --------------------------------------------------------------------------
 * PATTERN: Tab Router
 * --------------------------------------------------------------------------
 * Instead of a giant switch statement inline, we extract it.
 * This component maps tab IDs to their content components.
 *
 * LEARNING: Record<Key, JSX> Pattern
 * Using a typed Record ensures TypeScript catches if we forget
 * to handle a tab. If you add a new DevToolsTab and don't add
 * an entry here, TypeScript will error.
 * -------------------------------------------------------------------------- */

function TabRouter({ activeTab }: { activeTab: DevToolsTab }) {
    /**
     * PATTERN: Exhaustive Mapping
     * If we define this as Record<DevToolsTab, JSX.Element>,
     * TypeScript ensures every possible tab has a component.
     * Forgetting one = compile-time error. Much safer than switch.
     */
    const tabs: Record<DevToolsTab, ReactNode> = {
        layouts: <TabLayoutSwitcher />,
        theme: <TabThemeSwitcher />,
        dashboard: <TabDashboard />,
        console: <TabConsole />
    };

    return tabs[activeTab];
}

/* --------------------------------------------------------------------------
 * Tab: Layout Switcher
 * -------------------------------------------------------------------------- */

function TabLayoutSwitcher() {
    const { authLayout, setAuthLayout } = useDevToolsLayouts();

    const layouts: {
        id: AuthLayoutMode;
        label: string;
        description: string;
    }[] = [
        {
            id: 'split',
            label: 'Split Layout',
            description: 'Two-panel layout with brand section on the left'
        },
        {
            id: 'centered',
            label: 'Centered Layout',
            description:
                'Centered card with glassmorphism on full-page background'
        }
    ];

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="text-[1.4rem] font-semibold text-neutral-800">
                    Auth Layout Mode
                </h3>
                <p className="text-[1.2rem] text-neutral-500">
                    Switch between authentication page layouts in real time.
                </p>
            </div>

            <div className="flex flex-col gap-3">
                {layouts.map((layout) => (
                    <button
                        key={layout.id}
                        type="button"
                        onClick={() => setAuthLayout(layout.id)}
                        className={`rounded-xl border-2 p-4 text-left transition-all ${
                            authLayout === layout.id
                                ? 'border-accent bg-accent/5'
                                : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                    >
                        <div className="flex items-center justify-between">
                            <span className="text-[1.3rem] font-semibold text-neutral-800">
                                {layout.label}
                            </span>
                            {authLayout === layout.id && (
                                <span className="rounded-full bg-accent px-2 py-0.5 text-[1rem] font-medium text-white">
                                    Active
                                </span>
                            )}
                        </div>
                        <p className="mt-1 text-[1.2rem] text-neutral-500">
                            {layout.description}
                        </p>
                    </button>
                ))}
            </div>
        </div>
    );
}

/* --------------------------------------------------------------------------
 * Tab: Theme Switcher
 * -------------------------------------------------------------------------- */

function TabThemeSwitcher() {
    const { currentTheme, availableThemes, setTheme } = useDevToolsTheme();

    const themeColors: Record<string, string> = {
        default: 'bg-neutral-900',
        dark: 'bg-neutral-800',
        ocean: 'bg-blue-600'
    };

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="text-[1.4rem] font-semibold text-neutral-800">
                    Theme
                </h3>
                <p className="text-[1.2rem] text-neutral-500">
                    Switch the color theme of the application.
                </p>
            </div>

            <div className="flex gap-3">
                {availableThemes.map((theme) => (
                    <button
                        key={theme}
                        type="button"
                        onClick={() => setTheme(theme)}
                        className={`flex flex-col items-center gap-2 rounded-xl border-2 p-4 transition-all ${
                            currentTheme === theme
                                ? 'border-accent bg-accent/5'
                                : 'border-neutral-200 hover:border-neutral-300'
                        }`}
                    >
                        <div
                            className={`size-10 rounded-lg ${themeColors[theme] ?? 'bg-neutral-400'}`}
                        />
                        <span className="text-[1.2rem] font-medium capitalize text-neutral-700">
                            {theme}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}

/* --------------------------------------------------------------------------
 * Tab: Dashboard Controls
 * -------------------------------------------------------------------------- */

function TabDashboard() {
    return (
        <div className="flex flex-col gap-4">
            <div>
                <h3 className="text-[1.4rem] font-semibold text-neutral-800">
                    Dashboard Controls
                </h3>
                <p className="text-[1.2rem] text-neutral-500">
                    Control dashboard layout behavior and test responsive
                    states.
                </p>
            </div>

            <div className="rounded-xl bg-neutral-50 p-4">
                <p className="text-[1.3rem] text-neutral-600">
                    Use the sidebar collapse button (
                    <kbd className="rounded border border-neutral-200 bg-white px-1.5 py-0.5 text-[1rem] font-mono">
                        ←
                    </kbd>
                    ) in the dashboard to toggle sidebar state. The state is
                    persisted in localStorage via the UI store.
                </p>
            </div>
        </div>
    );
}

/* --------------------------------------------------------------------------
 * Tab: Console Logger
 * --------------------------------------------------------------------------
 * PATTERN: Virtualized-like List (Simple)
 * For now we cap at 200 logs and auto-scroll to bottom.
 * In production apps with thousands of entries, use
 * `@tanstack/react-virtual` for true virtualization.
 *
 * PATTERN: useRef + scrollIntoView for Auto-Scroll
 * We keep a ref to the bottom of the list and scroll to it
 * whenever logs change. This is simpler and more performant
 * than measuring scroll positions manually.
 * -------------------------------------------------------------------------- */

function TabConsole() {
    const { logs, clearLogs } = useDevToolsConsole();
    const bottomRef = useRef<HTMLDivElement>(null);

    /** Auto-scroll to bottom when new logs arrive */
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [logs.length]);

    const levelStyles: Record<string, string> = {
        log: 'text-neutral-600',
        info: 'text-info',
        warn: 'text-warning',
        error: 'text-error'
    };

    const levelBadges: Record<string, string> = {
        log: 'bg-neutral-100 text-neutral-600',
        info: 'bg-info-light text-info',
        warn: 'bg-warning-light text-warning',
        error: 'bg-error-light text-error'
    };

    return (
        <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-[1.4rem] font-semibold text-neutral-800">
                        Console
                    </h3>
                    <p className="text-[1.2rem] text-neutral-500">
                        In-app log viewer. Use{' '}
                        <code className="rounded bg-neutral-100 px-1 text-[1.1rem] font-mono">
                            useDevLog()
                        </code>{' '}
                        hook to send messages here.
                    </p>
                </div>
                <button
                    type="button"
                    onClick={clearLogs}
                    className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[1.2rem] font-medium text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-error"
                >
                    <Trash2 size={14} />
                    Clear
                </button>
            </div>

            <div className="max-h-112 min-h-64 overflow-y-auto rounded-xl border border-neutral-200 bg-neutral-900 p-3 font-mono scrollbar-thin">
                {logs.length === 0 ? (
                    <div className="flex-full-center h-32 text-[1.2rem] text-neutral-500">
                        No logs yet. Use <code>useDevLog()</code> to log
                        messages.
                    </div>
                ) : (
                    logs.map((entry) => (
                        <LogLine
                            key={entry.id}
                            entry={entry}
                            levelStyles={levelStyles}
                            levelBadges={levelBadges}
                        />
                    ))
                )}
                {/* Scroll anchor */}
                <div ref={bottomRef} />
            </div>
        </div>
    );
}

/** Single log line — extracted for readability and potential memoization */
function LogLine({
    entry,
    levelStyles,
    levelBadges
}: {
    entry: LogEntry;
    levelStyles: Record<string, string>;
    levelBadges: Record<string, string>;
}) {
    const time = new Date(entry.timestamp).toLocaleTimeString();

    return (
        <div className="flex gap-2 border-b border-neutral-800 py-1.5 text-[1.1rem] last:border-0">
            <span className="shrink-0 text-neutral-600">{time}</span>
            <span
                className={`shrink-0 rounded px-1.5 py-0.5 text-[1rem] font-medium uppercase ${levelBadges[entry.level] ?? ''}`}
            >
                {entry.level}
            </span>
            <span className={levelStyles[entry.level] ?? 'text-neutral-400'}>
                {entry.message}
            </span>
            {entry.data && (
                <span className="text-neutral-500">{entry.data}</span>
            )}
        </div>
    );
}
