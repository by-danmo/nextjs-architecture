"use client";

import { cn } from "@multi-app/lib/utils/generics";
import type { ComponentProps, ReactNode } from "react";

interface TwoColumnLayoutProps extends ComponentProps<"div"> {
  leftContent: ReactNode;
  rightContent: ReactNode;
  reverse?: boolean;
  gap?: string;
}

export const TwoColumnLayout = ({
  leftContent,
  rightContent,
  reverse = false,
  gap = "gap-12",
  className,
  ...props
}: TwoColumnLayoutProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2  items-center",
        gap,
        className,
      )}
      {...props}
    >
      <div className={cn({ "lg:order-2": reverse })}>{leftContent}</div>
      <div className={cn({ "lg:order-1 ": reverse })}>{rightContent}</div>
    </div>
  );
};
