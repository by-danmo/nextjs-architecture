/**
 * DashboardLayout — Wrapper composing Sidebar + Header + Content
 * ================================================================
 *
 * PATTERN: Layout Composition
 * ----------------------------
 * This component COMPOSES other components without owning their logic.
 * The Sidebar manages its own collapse state, the Header reads from
 * the same store. This layout just arranges them spatially.
 *
 * PATTERN: CSS Variable-Driven Spacing
 * Instead of hard-coding margin/padding values, we reference
 * CSS variables from the design system. If sidebar width changes,
 * everything adapts automatically.
 *
 * LEARNING: `motion.main` with `animate`
 * We animate the main content's `marginLeft` and `paddingTop` to
 * smoothly follow sidebar/header changes. This creates a polished
 * feel where the whole layout breathes together.
 */

'use client';

import { useSidebar } from '@/shared/stores/ui.store';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { Header } from '../components/header';
import { Sidebar } from '../components/sidebar';

export interface DashboardLayoutProps {
    children: ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
    const { isCollapsed } = useSidebar();

    return (
        <div className="min-h-screen bg-neutral-50">
            {/* Sidebar — fixed position, full height */}
            <Sidebar />

            {/* Header — fixed position, dynamic width */}
            <Header />

            {/**
             * PATTERN: Content Area with Dynamic Margins
             * The main area adjusts its left margin based on sidebar state.
             * Top padding accounts for the fixed header height.
             *
             * Using CSS variables ensures these values stay in sync with
             * the sidebar and header components without prop drilling.
             */}
            <motion.main
                animate={{
                    marginLeft: isCollapsed
                        ? 'var(--sidebar-width-collapsed)'
                        : 'var(--sidebar-width)',
                }}
                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                className="min-h-screen pt-[var(--header-height)]"
            >
                <div className="p-6 lg:p-8">
                    {children}
                </div>
            </motion.main>
        </div>
    );
}
