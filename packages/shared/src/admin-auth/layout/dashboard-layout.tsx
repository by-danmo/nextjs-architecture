"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { Menu } from "lucide-react";
import type { ReactNode } from "react";
import { useState } from "react";
import { DashboardHeader } from "../components/dashboard/dashboard-header";
import { AdminSidebar } from "../components/sidebar/admin-sidebar";
import type { NavItem } from "../components/sidebar/navigation";

interface UserProfile {
  name: string;
  shopName?: string;
  location?: string;
  avatarUrl?: string;
}

interface PageInfo {
  title: string;
  description?: string;
}

interface DashboardLayoutProps {
  /** Page content */
  children: ReactNode;
  /** Current page information */
  pageInfo: PageInfo;
  /** User profile data */
  user: UserProfile;
  /** Number of unread messages */
  unreadMessages?: number;
  /** Number of unread notifications */
  unreadNotifications?: number;
  /** Callback when messages icon is clicked */
  onMessagesClick?: () => void;
  /** Callback when notifications icon is clicked */
  onNotificationsClick?: () => void;
  /** Callback when profile is clicked */
  onProfileClick?: () => void;
  /** Callback when settings is clicked */
  onSettingsClick?: () => void;
  /** Callback when logout is clicked */
  onLogoutClick?: () => void;
  /** Callback when user guide start is clicked */
  onUserGuideStart?: () => void;
  /** Whether session is still loading (skeletons user profile in header) */
  isLoading?: boolean;
  /** Custom class name for the main content area */
  className?: string;
  /** Override main navigation items */
  mainNavigation?: NavItem[];
  /** Override bottom navigation items */
  bottomNavigation?: NavItem[];
}

/**
 * DashboardLayout component
 * Provides the main layout structure for the admin-seller dashboard
 * Includes:
 * - Fixed collapsible sidebar with navigation
 * - Fixed header with page info, messages, notifications, and user profile
 * - Scrollable main content area with max-width container
 */
export const DashboardLayout = ({
  children,
  pageInfo,
  user,
  unreadMessages = 0,
  unreadNotifications = 0,
  onMessagesClick,
  onNotificationsClick,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
  onUserGuideStart,
  isLoading = false,
  className,
  mainNavigation,
  bottomNavigation,
}: DashboardLayoutProps) => {
  // Sidebar state
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handlers
  const handleToggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const handleMobileMenuOpen = () => {
    setMobileMenuOpen(true);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      {/* Fixed Sidebar */}
      <AdminSidebar
        collapsed={sidebarCollapsed}
        mobileOpen={mobileMenuOpen}
        onToggleCollapse={handleToggleSidebar}
        onMobileClose={handleMobileMenuClose}
        onUserGuideStart={onUserGuideStart}
        mainNavigation={mainNavigation}
        bottomNavigation={bottomNavigation}
      />

      {/* Main Content Wrapper - takes remaining space after sidebar */}
      <div
        className={cn(
          "h-screen flex flex-col transition-all duration-300 ease-in-out",
          sidebarCollapsed ? "xl:pl-[72px]" : "xl:pl-[301px]",
        )}
      >
        {/* Fixed Header */}
        <header className="shrink-0 bg-white border-b border-gray-200 z-10">
          <div className="flex items-center">
            {/* Mobile menu button */}
            <button
              type="button"
              onClick={handleMobileMenuOpen}
              className={cn(
                "xl:hidden flex items-center justify-center",
                "w-14 h-14 ml-2",
                "hover:bg-gray-50 rounded-xl transition-colors cursor-pointer",
              )}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dashboard Header */}
            <DashboardHeader
              pageInfo={pageInfo}
              user={user}
              unreadMessages={unreadMessages}
              unreadNotifications={unreadNotifications}
              onMessagesClick={onMessagesClick}
              onNotificationsClick={onNotificationsClick}
              onProfileClick={onProfileClick}
              onSettingsClick={onSettingsClick}
              onLogoutClick={onLogoutClick}
              isLoading={isLoading}
              className="flex-1"
            />
          </div>
        </header>

        {/* Scrollable Main Content Area */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          {/* Centered Container with max-width */}
          <div
            className={cn(
              "w-full max-w-7xl mx-auto",
              "px-6 py-8 md:px-10 md:py-10 lg:px-12 lg:py-12",
              className,
            )}
          >
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
