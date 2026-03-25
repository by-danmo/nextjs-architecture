"use client";

import { cn } from "@multi-app/lib/utils/generics";
import type { StatusBadgeProps, StatusVariant } from "./types";

const statusStyles: Record<StatusVariant, string> = {
  success: "bg-emerald-50 text-emerald-600",
  warning: "bg-amber-50 text-amber-600",
  error: "bg-red-50 text-red-500",
  info: "bg-primary-100 text-primary-600",
  pending: "bg-amber-50 text-amber-600",
};

export const StatusBadge = ({ label, variant, icon }: StatusBadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center gap-1 rounded-full px-3.5 py-1.5 text-xs font-medium min-w-[70px]",
        statusStyles[variant],
      )}
    >
      {icon}
      {label}
    </span>
  );
};

export default StatusBadge;
