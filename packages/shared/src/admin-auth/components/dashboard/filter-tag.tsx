"use client";

import { cn } from "@multi-app/lib/utils/generics";

export interface FilterTagProps {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}

export const FilterTag = ({
  label,
  count,
  active,
  onClick,
}: FilterTagProps) => (
  <button
    type="button"
    onClick={onClick}
    className={cn(
      "flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all",
      active
        ? "bg-primary/10 text-primary border-primary/30"
        : "bg-gray-50 text-gray-500 border-gray-200 hover:border-gray-300 hover:text-gray-700",
    )}
  >
    {label}
    <span
      className={cn(
        "min-w-[18px] h-[18px] rounded-full flex items-center justify-center text-[10px] font-semibold px-1",
        active ? "bg-primary text-white" : "bg-gray-200 text-gray-600",
      )}
    >
      {count}
    </span>
  </button>
);
