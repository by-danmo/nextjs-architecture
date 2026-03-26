"use client";

import { ChevronsUpDown } from "lucide-react";

import { useSignOut } from "@/lib/auth";
import { cn } from "@/lib/utils/generics";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LocationIcon } from "../icons/location.icon";
import { LogoutIcon } from "../icons/logout-icon";
import { OrderIcon } from "../icons/order.icon";
import { ProfileIcon } from "../icons/user-duo.icon";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./dropdown-menu";
import { UserInfo } from "./user-info";

const profileMenuItems = [
  {
    label: "Parametre du profil",
    href: "/profile",
    icon: <ProfileIcon className="size-7" />,
  },
  {
    label: "Historique de commande",
    href: "/profile/orders",
    icon: <OrderIcon className="size-7" />,
  },
  {
    label: "Mes Adresses",
    href: "/profile/addresses",
    icon: <LocationIcon className="size-7" />,
  },
];

function LogoutMenuItem() {
  const router = useRouter();
  const { submit: handleLogout, loading } = useSignOut();

  return (
    <DropdownMenuItem
      disabled={loading}
      onClick={async () => {
        const { success } = await handleLogout();
        if (success) {
          router.push("/");
        }
      }}
      className="flex items-center gap-3 cursor-pointer text-red-600 focus:text-red-600 focus:bg-red-50"
    >
      <LogoutIcon className="size-7" />
      <span>{loading ? "Déconnexion..." : "Se déconnecter"}</span>
    </DropdownMenuItem>
  );
}

export function NavUser({
  user,
  compact = false,
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
  compact?: boolean;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center gap-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20",
            compact ? "px-3 py-1" : "p-2 px-6",
          )}
        >
          {/*<UserInfo user={user} showDetails={!compact} avatarSize="md" />*/}
          <ChevronsUpDown className="size-6 text-gray-400 shrink-0" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="min-w-64 rounded-xl shadow-lg border border-gray-200"
        side="bottom"
        align="end"
        sideOffset={8}
      >
        <DropdownMenuLabel className="p-0 font-normal">
          <div className="px-3 py-3">
            <UserInfo user={user} avatarSize="md" />
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {profileMenuItems.map((item) => (
          <DropdownMenuItem className="text-sm" key={item.href} asChild>
            <Link
              href={item.href}
              className="flex  items-center gap-3 cursor-pointer"
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <LogoutMenuItem />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
