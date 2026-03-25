"use client";

import { cn } from "@multi-app/lib/utils/generics";
import * as React from "react";
import { Button } from "./button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "./drawer";

export interface GlobalDrawerProps {
  isOpen: boolean;
  view?: React.ReactNode;
  title?: string;
  className?: string;
  direction?: "left" | "right" | "bottom" | "top";
  onClose: () => void;
  dismissible?: boolean;
}

export const GlobalDrawer = ({
  isOpen,
  view,
  title,
  className,
  direction = "right",
  onClose,
  dismissible = false,
}: GlobalDrawerProps) => {
  // Prevent body scroll when drawer is open
  React.useEffect(() => {
    const html = document.documentElement;
    if (isOpen) {
      html.style.overflowY = "hidden";
    } else {
      html.style.overflowY = "";
    }

    return () => {
      html.style.overflowY = "";
      html.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <Drawer
      direction={direction}
      open={isOpen}
      onOpenChange={onClose}
      dismissible={dismissible}
    >
      <DrawerContent
        overlayClassName="backdrop-blur-[3px]"
        className={cn("min-w-full sm:min-w-280 border-0!", className)}
      >
        {title !== undefined && (
          <DrawerHeader className="flex flex-row border-b border-b-gray-100 py-6 px-12 justify-between items-center">
            <DrawerTitle className="text-[3.6rem] font-bold">
              {title}
            </DrawerTitle>
            <Button
              onClick={onClose}
              variant="outline"
              className="ml-auto text-2xl font-bold p-2 px-6 border-0 w-max hover:bg-gray-100 rounded"
            >
              ✕
            </Button>
          </DrawerHeader>
        )}
        {view}
      </DrawerContent>
    </Drawer>
  );
};

export default GlobalDrawer;
