/**
 * Auth Route Layout
 * =================
 *
 * PATTERN: Next.js Layout Component
 * ----------------------------------
 * In Next.js App Router, `layout.tsx` wraps all pages in its route segment.
 * This file wraps ALL pages under `/auth/*` (login, forgot-password, etc.)
 *
 * KEY INSIGHT: Layouts vs Templates
 * - `layout.tsx` persists across navigations → shared state is preserved
 * - `template.tsx` remounts on every navigation → fresh state each time
 *
 * PATTERN: DevTools-Driven Layout Switching
 * ------------------------------------------
 * This layout reads from the DevTools store to decide which visual layout
 * to render (split vs centered). This is a powerful pattern for testing:
 *
 * 1. The layout SUBSCRIBES to the store via `useDevToolsLayouts()`
 * 2. The DevTools panel WRITES to the store via setAuthLayout()
 * 3. React automatically re-renders when the store value changes
 *
 * This is the REACTIVE BINDING that makes the switcher work in real-time.
 * Without this connection, changing the store value does nothing because
 * no component is listening.
 *
 * LEARNING: Why is this a Client Component?
 * Because it uses a Zustand hook (useDevToolsLayouts), it MUST be 'use client'.
 * Server Components cannot use hooks — they're stateless by design.
 * The tradeoff: this layout won't be server-rendered. For an auth page,
 * that's fine since it's interactive by nature (forms, animations).
 */

'use client';

import { AuthSplitLayout, AuthCenteredLayout } from '@/features/auth/layouts';
import { useDevToolsLayouts } from '@/shared/devtools';
import type { ReactNode } from 'react';

export default function AuthLayout({ children }: { children: ReactNode }) {
    /**
     * PATTERN: Conditional Rendering from Store
     * The `authLayout` value drives which layout component renders.
     * When the user clicks "Centered" in DevTools, the store updates,
     * this component re-renders, and the layout switches instantly.
     */
    const { authLayout } = useDevToolsLayouts();

    if (authLayout === 'centered') {
        return (
            <AuthCenteredLayout
                background="bg-gradient-to-br from-neutral-100 via-neutral-50 to-white"
                effects={{ glass: true, shadow: true }}
            >
                {children}
            </AuthCenteredLayout>
        );
    }

    return (
        <AuthSplitLayout brand={<AuthBrandPanel />}>
            {children}
        </AuthSplitLayout>
    );
}

/**
 * PATTERN: Co-located Brand Component
 * ------------------------------------
 * This component is specific to the auth layout and won't be reused elsewhere.
 * Co-locating it in the same file avoids unnecessary file proliferation.
 *
 * RULE OF THUMB: Only extract to a separate file when:
 * 1. It's reused in multiple places, OR
 * 2. It's complex enough to warrant its own tests, OR
 * 3. The parent file exceeds ~150 lines
 */
function AuthBrandPanel() {
    return (
        <div
            className="flex-full-center h-full w-full bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white"
        >
            <div className="flex flex-col items-center gap-8 p-12 text-center">
                {/* Decorative icon */}
                <div className="flex size-20 items-center justify-center rounded-2xl bg-accent text-[2.8rem] font-bold shadow-glow">
                    ✦
                </div>

                <div className="max-w-[32rem]">
                    <h1 className="text-[3.2rem] font-bold leading-tight text-white">
                        Welcome to the Platform
                    </h1>
                    <p className="mt-4 text-[1.6rem] leading-relaxed text-neutral-400">
                        Your all-in-one dashboard for managing your business, analytics, and team.
                    </p>
                </div>

                {/* Trust indicators */}
                <div className="mt-6 flex gap-8 text-neutral-500">
                    <div className="text-center">
                        <div className="text-[2.4rem] font-bold text-white">2.4k+</div>
                        <div className="text-[1.2rem] uppercase tracking-widest">Users</div>
                    </div>
                    <div className="h-12 w-px bg-neutral-700" />
                    <div className="text-center">
                        <div className="text-[2.4rem] font-bold text-white">99.9%</div>
                        <div className="text-[1.2rem] uppercase tracking-widest">Uptime</div>
                    </div>
                    <div className="h-12 w-px bg-neutral-700" />
                    <div className="text-center">
                        <div className="text-[2.4rem] font-bold text-white">4.9★</div>
                        <div className="text-[1.2rem] uppercase tracking-widest">Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
