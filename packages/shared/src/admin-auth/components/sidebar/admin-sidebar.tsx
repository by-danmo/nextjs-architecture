"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { ChevronLeft, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../../../ui/button";
import { Logo } from "../../../ui/logo";
import {
    bottomNavigation as defaultBottomNav,
    mainNavigation as defaultMainNav,
    type NavItem,
} from "./navigation";
import { SidebarNav } from "./sidebar-nav";
import { UserGuide } from "./user-guide";

interface AdminSidebarProps {
  /** Whether the sidebar is collapsed (showing only icons) */
  collapsed?: boolean;
  /** Whether the sidebar is visible on mobile */
  mobileOpen?: boolean;
  /** Callback when collapse toggle is clicked */
  onToggleCollapse?: () => void;
  /** Callback when mobile close is clicked */
  onMobileClose?: () => void;
  /** Callback when user guide start is clicked */
  onUserGuideStart?: () => void;
  /** Custom class name */
  className?: string;
  /** Override main navigation items (defaults to seller navigation) */
  mainNavigation?: NavItem[];
  /** Override bottom navigation items */
  bottomNavigation?: NavItem[];
}

/**
 * AdminSidebar component for the admin-seller dashboard
 * Features:
 * - Collapsible sidebar with logo
 * - Main navigation menu
 * - User guide card
 * - Bottom navigation (Settings, Help)
 * - Mobile responsive with overlay
 */
export const AdminSidebar = ({
  collapsed = false,
  mobileOpen = false,
  onToggleCollapse,
  onMobileClose,
  onUserGuideStart,
  className,
  mainNavigation = defaultMainNav,
  bottomNavigation = defaultBottomNav,
}: AdminSidebarProps) => {
  return (
    <>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 xl:hidden"
          onClick={onMobileClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-0 left-0 bottom-0 z-30 flex flex-col",
          "bg-white border-r border-gray-100",
          "transition-all duration-300 ease-in-out",
          // Width based on collapsed state
          collapsed ? "w-[72px]" : "w-[301px]",
          // Mobile visibility
          "max-xl:-translate-x-full max-xl:w-full max-xl:max-w-[301px]",
          mobileOpen && "max-xl:translate-x-0",
          className,
        )}
      >
        {/* Header with Logo and Collapse Button */}
        <div
          className={cn(
            "flex items-center p-4 gap-2.5",
            collapsed ? "justify-center" : "justify-between",
          )}
        >
          {/* Logo */}
          {collapsed ? (
            <Link href="/dashboard" className="flex items-center gap-2.5">
              <div className="w-10 h-10 flex items-center justify-center">
                <span className="text-2xl font-medium text-primary">S</span>
                <span className="text-primary">.</span>
              </div>
            </Link>
          ) : (
            <Logo
              siteName="She sold"
              textColor="red"
              size="md"
              href="/dashboard"
            />
          )}

          {/* Collapse/Close Buttons */}
          <div className="flex items-center gap-2">
            {/* Desktop collapse button */}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onToggleCollapse}
              className={cn(
                "hidden xl:flex items-center justify-center",
                "!w-6 !h-6 !p-0 rounded-md border border-gray-100 bg-white",
                "hover:bg-gray-50",
                collapsed && "rotate-180",
              )}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </Button>

            {/* Mobile close button */}
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onMobileClose}
              className={cn(
                "flex xl:hidden items-center justify-center",
                "!w-6 !h-6 !p-0 rounded-md",
                "hover:bg-gray-50",
              )}
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5 text-gray-700" />
            </Button>
          </div>
        </div>

        {/* Menu Label */}
        {!collapsed && (
          <div className="px-4 pt-3 pb-2">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
              MENU
            </span>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden px-4 gap-5">
          {/* Main Navigation */}
          <SidebarNav items={mainNavigation} collapsed={collapsed} />

          {/* Spacer */}
          <div className="flex-1" />

          {/* User Guide - Only show when not collapsed */}
          <UserGuide collapsed={collapsed} onStartClick={onUserGuideStart} />

          {/* Bottom Navigation */}
          <SidebarNav
            items={bottomNavigation}
            collapsed={collapsed}
            className="pb-4"
          />
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
