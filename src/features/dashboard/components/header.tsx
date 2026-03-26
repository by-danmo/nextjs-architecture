/**
 * Header — Dashboard top bar
 * ===========================
 *
 * PATTERN: Adaptive Layout Component
 * ------------------------------------
 * The header's left margin adjusts based on sidebar state.
 * Instead of passing `isCollapsed` as a prop (prop drilling),
 * we read directly from the Zustand store.
 *
 * PATTERN: Forwarding Native HTML Attributes
 * -------------------------------------------
 * We don't recreate all the props that a <header> already has.
 * Instead, we extend `HTMLAttributes<HTMLElement>` so consumers
 * can pass any valid HTML attribute (className, id, aria-*, etc.)
 *
 * LEARNING: Command Palette UX Pattern (Cmd+K)
 * The search bar shows a keyboard shortcut hint (⌘K). This is a
 * common pattern in modern SaaS apps (Vercel, Linear, Notion).
 * It hints at a global command palette without taking up space.
 */

'use client';

import { useSidebar } from '@/shared/stores/ui.store';
import { Bell, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export function Header() {
    const { isCollapsed, toggle } = useSidebar();

    return (
        <motion.header
            /**
             * PATTERN: Dynamic Offset via CSS Variables
             * The header's left margin matches the sidebar width.
             * Using CSS variables here means if we change sidebar width
             * in the design system, the header follows automatically.
             */
            animate={{
                marginLeft: isCollapsed
                    ? 'var(--sidebar-width-collapsed)'
                    : 'var(--sidebar-width)',
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed top-0 right-0 z-sticky flex h-[var(--header-height)] items-center justify-between border-b border-border bg-surface/80 px-6 backdrop-blur-md"
        >
            {/* Left section — mobile menu + breadcrumb */}
            <div className="flex items-center gap-4">
                {/* Mobile menu toggle — only visible on small screens */}
                <button
                    type="button"
                    onClick={toggle}
                    className="flex-full-center size-10 rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600 md:hidden"
                    aria-label="Toggle menu"
                >
                    <Menu size={20} />
                </button>

                {/* Search bar with keyboard shortcut hint */}
                <div className="relative hidden md:block">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="h-10 w-[28rem] rounded-lg border border-border bg-neutral-50 pl-4 pr-16 text-[1.3rem] outline-none transition-colors placeholder:text-neutral-400 focus:border-accent focus:bg-surface focus:ring-2 focus:ring-accent/20"
                    />
                    {/**
                     * PATTERN: Keyboard Shortcut Badge
                     * Shows a visual hint for power users.
                     * Uses absolute positioning inside the input container.
                     */}
                    <div className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center gap-1">
                        <kbd className="rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-[1rem] font-medium text-neutral-400">
                            ⌘
                        </kbd>
                        <kbd className="rounded border border-neutral-200 bg-neutral-100 px-1.5 py-0.5 text-[1rem] font-medium text-neutral-400">
                            K
                        </kbd>
                    </div>
                </div>
            </div>

            {/* Right section — actions */}
            <div className="flex items-center gap-3">
                {/* Notification bell with badge */}
                <button
                    type="button"
                    className="relative flex-full-center size-10 rounded-lg text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
                    aria-label="Notifications"
                >
                    <Bell size={20} />
                    {/**
                     * PATTERN: Notification Dot
                     * A small pulsing dot signals unread notifications.
                     * The `animate-pulse` class from Tailwind creates a
                     * subtle breathing animation to draw attention.
                     */}
                    <span className="absolute right-2 top-2 size-2 rounded-full bg-error animate-pulse" />
                </button>

                {/* User avatar */}
                <button
                    type="button"
                    className="flex items-center gap-3 rounded-lg px-3 py-1.5 transition-colors hover:bg-neutral-100"
                    aria-label="User menu"
                >
                    <div className="flex size-9 items-center justify-center rounded-full bg-accent text-[1.2rem] font-bold text-white">
                        D
                    </div>
                    <div className="hidden text-left md:block">
                        <div className="text-[1.3rem] font-semibold text-neutral-800 leading-tight">
                            Dan Mo
                        </div>
                        <div className="text-[1.1rem] text-neutral-400">
                            Admin
                        </div>
                    </div>
                </button>
            </div>
        </motion.header>
    );
}
