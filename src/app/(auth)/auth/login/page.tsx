/**
 * Login Page — Route: /auth/login
 * ================================
 *
 * PATTERN: Thin Route Files
 * --------------------------
 * In a feature-based architecture, page.tsx files should be thin.
 * They import and compose feature components — no business logic here.
 *
 * This separation means:
 * - The feature component (LoginForm) can be tested independently
 * - The page file handles routing metadata (SEO, etc.)
 * - Easy to swap or A/B test components without touching routing
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Login | Platform',
    description: 'Sign in to access your dashboard and manage your business.',
};

export default function LoginPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-[2.8rem] font-bold text-neutral-900">
                    Sign In
                </h1>
                <p className="mt-2 text-[1.4rem] text-neutral-500">
                    Enter your credentials to access your account
                </p>
            </div>

            {/* LoginForm will be implemented as a separate feature component */}
            <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-[1.3rem] font-medium text-neutral-700">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="rounded-lg border border-neutral-200 px-4 py-3 text-[1.4rem] outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="password" className="text-[1.3rem] font-medium text-neutral-700">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="rounded-lg border border-neutral-200 px-4 py-3 text-[1.4rem] outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    />
                </div>
                <button
                    type="button"
                    className="mt-4 rounded-lg bg-accent px-6 py-3 text-[1.4rem] font-semibold text-white transition-colors hover:bg-accent-hover"
                >
                    Sign In
                </button>
            </div>
        </div>
    );
}
