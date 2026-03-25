"use client";

import { usePanelStore } from "@multi-app/lib/stores/drawer.store";
import { cn } from "@multi-app/lib/utils/generics";
import {
    Bell,
    ChevronDown,
    HelpCircle,
    LogOut,
    MessageSquareMore,
    Settings,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../../../ui/avatar";
import { Button } from "../../../ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "../../../ui/dropdown-menu";
import { MessagesPanel } from "./messages-panel";
import { NotificationsPanel } from "./notifications-panel";

// ============================================================================
// Interfaces
// ============================================================================

interface UserProfile {
  name: string;
  email?: string;
  shopName?: string;
  location?: string;
  avatarUrl?: string;
}

interface PageInfo {
  title: string;
  description?: string;
}

export interface DashboardHeaderProps {
  pageInfo: PageInfo;
  user: UserProfile;
  unreadMessages?: number;
  unreadNotifications?: number;
  onMessagesClick?: () => void;
  onNotificationsClick?: () => void;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
  isLoading?: boolean;
  className?: string;
}

// ============================================================================
// Sub-components
// ============================================================================

interface UserProfileDropdownProps {
  user: UserProfile;
  onProfileClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
}

const UserProfileDropdown = ({
  user,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
}: UserProfileDropdownProps) => {
  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          className={cn(
            "flex items-center gap-3 px-3 h-[4.8rem] rounded-[1.2rem] bg-gray-50",
            "hover:bg-gray-100",
          )}
        >
          <Avatar className="size-[3.6rem]">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback className="bg-primary text-white text-sm font-medium">
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-6 items-start ">
            <span className="text-[1.4rem] font-medium text-gray-900  max-w-[150px]">
              {user.name}
            </span>
            <span className="text-[1.2rem] text-gray-500  max-w-[150px]">
              {user.shopName || "Vendeur"}
            </span>
          </div>
          <ChevronDown className="size-7 text-gray-400 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[280px] p-4">
        <div className="flex items-center gap-3 mb-4">
          <Avatar className="size-12">
            <AvatarImage src={user.avatarUrl} alt={user.name} />
            <AvatarFallback className="bg-primary text-white">
              {getInitials(user.name)}
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col overflow-hidden">
            <span className="font-semibold text-gray-900 truncate">
              {user.name}
            </span>
            {user.shopName && (
              <span className="text-sm font-medium text-primary truncate">
                Boutique: {user.shopName}
              </span>
            )}
            {user.email && (
              <span className="text-xs text-gray-500 truncate">
                {user.email}
              </span>
            )}
          </div>
        </div>

        <Button
          onClick={onProfileClick}
          className="w-full bg-primary hover:bg-primary/90 text-white mb-4 rounded-xl h-10"
        >
          Modifier le profil
        </Button>

        <div className="space-y-1 border-t border-gray-100 pt-2">
          <DropdownMenuItem
            onClick={onSettingsClick}
            className="flex items-center gap-3 px-2 py-2.5 cursor-pointer text-gray-700 font-medium"
          >
            <Settings className="size-8" />
            Parametres
          </DropdownMenuItem>
          <DropdownMenuItem className="flex items-center gap-3 px-2 py-2.5 cursor-pointer text-gray-700 font-medium">
            <HelpCircle className="size-8" />
            Centre d'aide
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={onLogoutClick}
            className="flex items-center gap-3 px-2 py-2.5 cursor-pointer text-destructive font-medium focus:text-destructive"
          >
            <LogOut className="size-8" />
            Déconnexion
          </DropdownMenuItem>
        </div>

        <div className="pt-2 mt-2 border-t border-gray-100 flex items-center justify-between px-2">
          <span className="text-xs text-gray-500 font-medium">Boutique</span>
          <span className="text-sm font-semibold text-gray-900 truncate max-w-[150px]">
            {user.location || "Non renseigné"}
          </span>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// ============================================================================
// Component
// ============================================================================

export const DashboardHeader = ({
  pageInfo,
  user,
  unreadMessages = 0,
  unreadNotifications = 0,
  onMessagesClick,
  onNotificationsClick,
  onProfileClick,
  onSettingsClick,
  onLogoutClick,
  isLoading = false,
  className,
}: DashboardHeaderProps) => {
  const { openPanel } = usePanelStore();

  const panelClassName =
    "inset-y-0 right-0 left-auto w-full sm:w-[400px] max-w-full h-full flex flex-col rounded-none border-l border-gray-100";

  return (
    <header
      className={cn(
        "flex items-center justify-between",
        "px-6 py-4 lg:px-8 lg:py-5 bg-white",
        className,
      )}
    >
      {/* Page Info */}
      <div className="flex flex-col">
        <h1 className="text-xl lg:text-2xl font-semibold text-gray-900">
          {pageInfo.title}
        </h1>
        {pageInfo.description && (
          <p className="text-sm lg:text-base text-gray-500 font-normal">
            {pageInfo.description}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 lg:gap-5">
        {/* Messages Button */}
        <Button
          type="button"
          variant="ghost"
          onClick={() =>
            openPanel({
              view: <MessagesPanel onViewAll={onMessagesClick} />,
              className: panelClassName,
            })
          }
          className={cn(
            "relative flex items-center justify-center",
            "w-[4.8rem] h-[4.8rem] rounded-[1.2rem] bg-gray-50",
            "hover:bg-gray-100 p-0",
          )}
          aria-label="Messages"
        >
          <MessageSquareMore className="w-[2rem] h-[2rem] text-gray-600" />
          {unreadMessages > 0 && (
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-primary rounded-full ring-2 ring-white" />
          )}
        </Button>

        {/* Notifications Button */}
        <Button
          type="button"
          variant="ghost"
          onClick={() =>
            openPanel({
              view: <NotificationsPanel onViewAll={onNotificationsClick} />,
              className: panelClassName,
            })
          }
          className={cn(
            "relative flex items-center justify-center",
            "w-[4.8rem] h-[4.8rem] rounded-[1.2rem] bg-gray-50",
            "hover:bg-gray-100 p-0",
          )}
          aria-label="Notifications"
        >
          <Bell className="w-[2rem] h-[2rem] text-gray-600" />
          {unreadNotifications > 0 && (
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-primary rounded-full ring-2 ring-white" />
          )}
        </Button>

        {/* User Profile Dropdown */}
        {isLoading ? (
          <div className="flex items-center gap-3 px-3 h-[4.8rem] rounded-[1.2rem] bg-gray-50">
            <div className="size-[3.6rem] rounded-full bg-gray-200 animate-pulse" />
            <div className="flex flex-col gap-1">
              <div className="h-4 w-28 bg-gray-200 rounded animate-pulse" />
              <div className="h-3 w-20 bg-gray-200 rounded animate-pulse" />
            </div>
            <div className="h-5 w-5 bg-gray-200 rounded animate-pulse ml-1" />
          </div>
        ) : (
          <UserProfileDropdown
            user={user}
            onProfileClick={onProfileClick}
            onSettingsClick={onSettingsClick}
            onLogoutClick={onLogoutClick}
          />
        )}
      </div>
    </header>
  );
};

export default DashboardHeader;
