/**
 * Dashboard Home Page — Route: /dashboard
 * =========================================
 *
 * PATTERN: Placeholder Page with Grid Layout
 * This page demonstrates a responsive stats grid that's common
 * in admin dashboards. It uses CSS Grid via Tailwind utilities.
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Dashboard | Platform',
    description: 'Overview of your business metrics and recent activity.',
};

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-8">
            {/* Page header */}
            <div>
                <h1 className="text-[2.4rem] font-bold text-neutral-900">Dashboard</h1>
                <p className="mt-1 text-[1.4rem] text-neutral-500">
                    Welcome back! Here&apos;s an overview of your business.
                </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {STATS.map((stat) => (
                    <div
                        key={stat.label}
                        className="rounded-xl border border-border bg-surface p-5 transition-shadow hover:shadow-md"
                    >
                        <div className="text-[1.2rem] font-medium uppercase tracking-wider text-neutral-400">
                            {stat.label}
                        </div>
                        <div className="mt-2 text-[2.8rem] font-bold text-neutral-900">
                            {stat.value}
                        </div>
                        <div className={`mt-1 text-[1.2rem] font-medium ${stat.positive ? 'text-success' : 'text-error'}`}>
                            {stat.change}
                        </div>
                    </div>
                ))}
            </div>

            {/* Content placeholder */}
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
                <div className="col-span-2 rounded-xl border border-border bg-surface p-6">
                    <h2 className="text-[1.6rem] font-semibold text-neutral-800">Recent Activity</h2>
                    <div className="mt-4 flex-full-center h-48 rounded-lg bg-neutral-50 text-[1.4rem] text-neutral-400">
                        Chart placeholder
                    </div>
                </div>
                <div className="rounded-xl border border-border bg-surface p-6">
                    <h2 className="text-[1.6rem] font-semibold text-neutral-800">Quick Actions</h2>
                    <div className="mt-4 flex flex-col gap-3">
                        {['New Product', 'View Orders', 'Analytics'].map((action) => (
                            <button
                                key={action}
                                type="button"
                                className="rounded-lg bg-neutral-50 px-4 py-3 text-left text-[1.3rem] font-medium text-neutral-700 transition-colors hover:bg-accent/10 hover:text-accent"
                            >
                                {action}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

/** Static stats data — in production this would come from an API / Server Component fetch */
const STATS = [
    { label: 'Revenue', value: '$12.4k', change: '+12.5%', positive: true },
    { label: 'Orders', value: '356', change: '+8.2%', positive: true },
    { label: 'Customers', value: '2,103', change: '+3.1%', positive: true },
    { label: 'Avg. Order', value: '$34.80', change: '-2.4%', positive: false },
];
