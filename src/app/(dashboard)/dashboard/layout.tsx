/**
 * Dashboard Route Layout
 * =======================
 *
 * PATTERN: Server → Client Boundary
 * -----------------------------------
 * This file is a Server Component. It imports `DashboardLayout`
 * (a Client Component) to wrap all dashboard pages.
 *
 * LEARNING: Why keep this file thin?
 * The route layout.tsx should only do two things:
 * 1. Export metadata (SEO)
 * 2. Wrap children in the layout component
 *
 * All the actual layout logic (sidebar, header) lives in the
 * feature module (`features/dashboard/layouts`), not here.
 * This keeps the routing layer clean and the feature layer portable.
 */

import { DashboardLayout } from '@/features/dashboard/layouts';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
    title: 'Dashboard | Platform',
    description: 'Manage your business, analytics, and team from your dashboard.',
};

export default function DashboardRouteLayout({ children }: { children: ReactNode }) {
    return <DashboardLayout>{children}</DashboardLayout>;
}
