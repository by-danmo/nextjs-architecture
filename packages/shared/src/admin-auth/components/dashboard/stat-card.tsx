"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { MoreVertical, TrendingDown, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../../../ui";
import Title from "../../../ui/title";

interface StatCardProps {
  /** Title of the stat card */
  title: string;
  /** The main value to display */
  value: string | number;
  /** Optional currency or unit suffix */
  suffix?: string;
  /** Optional currency or unit prefix */
  prefix?: string;
  /** Percentage change (positive or negative) */
  changePercentage?: number;
  /** Whether to show the options menu */
  showOptions?: boolean;
  /** Callback when options button is clicked */
  onOptionsClick?: () => void;
  /** Custom icon to display */
  icon?: ReactNode;
  /** Custom class name */
  className?: string;
}

/**
 * StatCard component for displaying KPI metrics
 * Displays a title, main value, and optional percentage change indicator
 */
export const StatCard = ({
  title,
  value,
  suffix,
  prefix,
  changePercentage,
  showOptions = true,
  onOptionsClick,
  icon,
  className,
}: StatCardProps) => {
  const isPositive = changePercentage !== undefined && changePercentage >= 0;
  const isNegative = changePercentage !== undefined && changePercentage < 0;

  // Format the percentage for display
  const formatPercentage = (pct: number) => {
    const sign = pct >= 0 ? "+" : "";
    return `${sign}${pct.toFixed(1)}%`;
  };

  // Format large numbers with thousand separators
  const formatValue = (val: string | number) => {
    if (typeof val === "number") {
      return val.toLocaleString("fr-FR");
    }
    return val;
  };

  return (
    <div
      className={cn(
        "flex justify-between flex-col bg-white rounded-2xl h-64 shadow-xs",
        "min-w-[220px] flex-1",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 lg:px-6 lg:py-5">
        <div className="flex items-center gap-3">
          {icon && (
            <span className="flex items-center text-gray-500">{icon}</span>
          )}
          <h3 className="text-sm lg:text-base font-medium font-sans">
            {title}
          </h3>
        </div>
        {showOptions && (
          <Button
            type="button"
            variant="only-icon"
            onClick={onOptionsClick}
            className="flex items-center justify-center rounded-full opacity-50 hover:opacity-100 hover:bg-gray-100 transition-all cursor-pointer"
            icon={<MoreVertical className="size-9 text-gray-500" />}
            aria-label="Options"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col justify-end px-5 pb-5 pt-2 lg:px-6 lg:pb-6 gap-2">
        {/* Value with optional change percentage */}
        <div className="flex items-baseline gap-2">
          <div className="flex items-baseline gap-1">
            {prefix && (
              <span className="text-2xl lg:text-3xl font-semibold text-gray-900">
                {prefix}
              </span>
            )}
            <Title
              as="h1"
              className="text-3xl lg:text-4xl xl:text-5xl font-semibold text-gray-900 tracking-tight"
            >
              {formatValue(value)}
            </Title>
            {suffix && (
              <span className="text-base lg:text-lg font-normal text-gray-500 ml-1">
                {suffix}
              </span>
            )}
          </div>

          {/* Change Percentage Indicator */}
          {changePercentage !== undefined && (
            <div
              className={cn(
                "flex items-center gap-1 text-sm font-medium ml-2",
                isPositive && "text-success-600",
                isNegative && "text-destructive-600",
              )}
            >
              {isPositive ? (
                <TrendingUp className="w-4 h-4" />
              ) : (
                <TrendingDown className="w-4 h-4" />
              )}
              <span>{formatPercentage(changePercentage)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatCard;
