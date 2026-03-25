"use client";

import { cn } from "@multi-app/lib/utils/generics";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

interface SidebarNavProps {
  items: NavItem[];
  collapsed?: boolean;
  className?: string;
}

interface SidebarNavItemProps {
  item: NavItem;
  isActive: boolean;
  collapsed?: boolean;
}

/**
 * Individual navigation item component
 */
const SidebarNavItem = ({ item, isActive, collapsed }: SidebarNavItemProps) => {
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      className={cn(
        "group flex items-center gap-3 px-3 py-4.5 rounded-lg transition-colors",
        "text-base font-medium",
        collapsed ? "justify-center" : "",
        isActive
          ? "bg-primary-50 text-primary"
          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
      )}
    >
      <Icon
        className={cn(
          "size-10 shrink-0 transition-colors",
          isActive ? "text-primary" : "text-gray-500 group-hover:text-gray-700",
        )}
        strokeWidth={2}
      />
      {!collapsed && <span className="flex-1 truncate">{item.title}</span>}
    </Link>
  );
};

/**
 * SidebarNav component
 * Renders a list of navigation items with active state handling
 */
export const SidebarNav = ({
  items,
  collapsed = false,
  className,
}: SidebarNavProps) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname.startsWith(href);
  };

  return (
    <nav className={cn("flex flex-col gap-2", className)}>
      {items.map((item) => (
        <SidebarNavItem
          key={item.href}
          item={item}
          isActive={isActive(item.href)}
          collapsed={collapsed}
        />
      ))}
    </nav>
  );
};

export default SidebarNav;
