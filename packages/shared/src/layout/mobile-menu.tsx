"use client";

import { cn } from "@multi-app/lib/utils/generics";
import Link from "next/link";
import { useEffect } from "react";
import { CloseIcon } from "../icons/hamburger.icon";
import { Logo } from "../ui";

export interface MenuItem {
  label: string;
  href: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: MenuItem[];
  className?: string;
  logoTextColor?: "red" | "white" | "black";
  logoDotColor?: "red" | "yellow";
}

export const MobileMenu = ({
  isOpen,
  onClose,
  menuItems,
  className,
  logoTextColor = "red",
  logoDotColor = "yellow",
}: MobileMenuProps) => {
  // Empêcher le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 z-40 transition-opacity duration-300",
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-9999 transition-transform duration-300 ease-in-out",
          isOpen ? "translate-y-0" : "-translate-y-full",
          className,
        )}
      >
        {/* Header du menu */}
        <div className="flex items-center justify-between p-6 md:p-8 border-b border-gray-200">
          <Logo textColor={logoTextColor} dotColor={logoDotColor} size="md" />
          <button
            className="text-black hover:text-primary transition-colors p-2"
            aria-label="Fermer le menu"
            onClick={onClose}
          >
            <CloseIcon className="size-8 md:size-10" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col items-center  p-6 md:p-8 space-y-2 min-h-[calc(100vh-10rem)]">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="font-family-heading text-3xl md:text-4xl lg:text-5xl font-medium text-gray-900 hover:text-primary transition-colors py-4 md:py-6 text-center"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};
