/**
 * Sidebar — Collapsible navigation panel
 * ========================================
 *
 * PATTERN: Controlled vs Uncontrolled Components
 * ------------------------------------------------
 * This sidebar is a CONTROLLED component: its `collapsed` state
 * lives in the Zustand store (`ui.store.ts`), not locally.
 *
 * WHY? Because multiple components need to react to sidebar state:
 * - The Header adjusts its width
 * - The main content area expands/contracts
 * - The sidebar itself animates
 *
 * When state is shared → lift it up (to a store or parent).
 * When state is local → keep it in the component (useState).
 *
 * PATTERN: Data-Driven Navigation
 * --------------------------------
 * Navigation items are defined as a typed array, not hard-coded JSX.
 * This makes it trivial to:
 * - Add/remove items without touching component logic
 * - Generate items from a CMS or API
 * - Filter items based on user permissions (RBAC)
 *
 * PATTERN: CSS Variable-Driven Layout
 * ------------------------------------
 * Sidebar width is defined as CSS variables in @theme:
 *   --sidebar-width: 26rem
 *   --sidebar-width-collapsed: 7.2rem
 *
 * This means the layout dimensions are part of the design system,
 * not hard-coded in component styles. Any component can read them.
 */

'use client';

import { useSidebar } from '@/shared/stores/ui.store';
import {
    BarChart3,
    ChevronLeft,
    Home,
    Package,
    Settings,
    ShoppingCart,
    Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ComponentType, SVGAttributes } from 'react';

/* --------------------------------------------------------------------------
 * PATTERN: Type-Safe Navigation Config
 * -------------------------------------
 * Define a strict interface for nav items. Using `ComponentType` for the
 * icon type lets us pass any Lucide icon (or custom SVG component).
 *
 * The `badge` field is optional — it shows a notification count.
 * -------------------------------------------------------------------------- */
interface NavItem {
    label: string;
    href: string;
    icon: ComponentType<SVGAttributes<SVGElement>>;
    badge?: number;
}

/**
 * PATTERN: Configuration as Data
 * This array is the SINGLE SOURCE OF TRUTH for sidebar navigation.
 * To add a new page: add one object here. No component changes needed.
 */
const NAV_ITEMS: NavItem[] = [
    { label: 'Dashboard', href: '/dashboard', icon: Home },
    { label: 'Products', href: '/dashboard/products', icon: Package },
    { label: 'Orders', href: '/dashboard/orders', icon: ShoppingCart, badge: 3 },
    { label: 'Customers', href: '/dashboard/customers', icon: Users },
    { label: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
    { label: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export function Sidebar() {
    const { isCollapsed, toggle } = useSidebar();
    const pathname = usePathname();

    return (
        <motion.aside
            /**
             * PATTERN: Animate Layout with motion
             * Using `animate` with dynamic width creates smooth
             * expand/collapse transitions. The `layout` prop tells
             * Framer Motion to animate layout changes automatically.
             */
            animate={{
                width: isCollapsed
                    ? 'var(--sidebar-width-collapsed)'
                    : 'var(--sidebar-width)',
            }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed left-0 top-0 z-sticky flex h-screen flex-col border-r border-border bg-surface"
        >
            {/* Logo area */}
            <div className="flex h-[var(--header-height)] items-center justify-between border-b border-border px-6">
                <motion.span
                    animate={{ opacity: isCollapsed ? 0 : 1 }}
                    className="text-[1.8rem] font-bold text-primary whitespace-nowrap overflow-hidden"
                >
                    Platform
                </motion.span>

                {/* Collapse toggle button */}
                <button
                    type="button"
                    onClick={toggle}
                    aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
                    className="flex-full-center size-8 rounded-md text-neutral-400 transition-colors hover:bg-neutral-100 hover:text-neutral-600"
                >
                    <motion.span
                        animate={{ rotate: isCollapsed ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <ChevronLeft size={18} />
                    </motion.span>
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto px-3 py-4 scrollbar-thin">
                <ul className="flex flex-col gap-1">
                    {NAV_ITEMS.map((item) => (
                        <SidebarItem
                            key={item.href}
                            item={item}
                            isCollapsed={isCollapsed}
                            isActive={pathname === item.href}
                        />
                    ))}
                </ul>
            </nav>

            {/* Footer */}
            <div className="border-t border-border p-3">
                <div className="flex items-center gap-3 rounded-lg px-3 py-2">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent text-[1.2rem] font-bold text-white">
                        D
                    </div>
                    <motion.div
                        animate={{ opacity: isCollapsed ? 0 : 1, width: isCollapsed ? 0 : 'auto' }}
                        className="overflow-hidden whitespace-nowrap"
                    >
                        <div className="text-[1.3rem] font-semibold text-neutral-800">Dan Mo</div>
                        <div className="text-[1.1rem] text-neutral-400">Admin</div>
                    </motion.div>
                </div>
            </div>
        </motion.aside>
    );
}

/* --------------------------------------------------------------------------
 * PATTERN: Extracted List Item Component
 * ---------------------------------------
 * Each nav item is its own component. This:
 * 1. Keeps the parent clean
 * 2. Allows React to optimize re-renders (only re-renders active changes)
 * 3. Encapsulates the "active" styling logic
 *
 * PATTERN: Active Route Detection
 * We compare `pathname` with `item.href` to highlight the active page.
 * In production, you'd use `pathname.startsWith(item.href)` for nested routes.
 * -------------------------------------------------------------------------- */
interface SidebarItemProps {
    item: NavItem;
    isCollapsed: boolean;
    isActive: boolean;
}

function SidebarItem({ item, isCollapsed, isActive }: SidebarItemProps) {
    const Icon = item.icon;

    return (
        <li>
            <Link
                href={item.href}
                className={`
                    group flex items-center gap-3 rounded-lg px-3 py-2.5
                    text-[1.4rem] font-medium transition-all duration-200
                    ${isActive
                        ? 'bg-accent/10 text-accent'
                        : 'text-neutral-500 hover:bg-neutral-100 hover:text-neutral-800'
                    }
                    ${isCollapsed ? 'justify-center' : ''}
                `}
            >
                <Icon
                    className={`size-[2rem] shrink-0 transition-colors ${
                        isActive ? 'text-accent' : 'text-neutral-400 group-hover:text-neutral-600'
                    }`}
                />

                {/* Label — hidden when collapsed */}
                <motion.span
                    animate={{
                        opacity: isCollapsed ? 0 : 1,
                        width: isCollapsed ? 0 : 'auto',
                    }}
                    className="overflow-hidden whitespace-nowrap"
                >
                    {item.label}
                </motion.span>

                {/* Badge — notification count */}
                {item.badge && !isCollapsed && (
                    <span className="ml-auto flex size-6 items-center justify-center rounded-full bg-error text-[1rem] font-bold text-white">
                        {item.badge}
                    </span>
                )}
            </Link>
        </li>
    );
}
