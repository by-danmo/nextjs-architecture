"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { ChevronDown, TrendingUp } from "lucide-react";
import type { ReactNode } from "react";

interface ChartWidgetProps {
  /** Title of the chart */
  title: string;
  /** The main value to display */
  value?: string | number;
  /** Optional currency suffix (e.g., 'XOF') */
  valueSuffix?: string;
  /** Percentage change */
  changePercentage?: number;
  /** Selected time period */
  period?: string;
  /** Available period options */
  periodOptions?: string[];
  /** Callback when period changes */
  onPeriodChange?: (period: string) => void;
  /** Chart content */
  children: ReactNode;
  /** Custom class name */
  className?: string;
}

/**
 * ChartWidget component
 * A container for charts with a header showing title, value, change indicator, and period selector
 */
export const ChartWidget = ({
  title,
  value,
  valueSuffix,
  changePercentage,
  period = "Année",
  periodOptions = ["Année", "Mois", "Semaine"],
  onPeriodChange,
  children,
  className,
}: ChartWidgetProps) => {
  const isPositive = changePercentage !== undefined && changePercentage >= 0;

  // Format the percentage for display
  const formatPercentage = (pct: number) => {
    return `↑${Math.abs(pct).toFixed(1)}%`;
  };

  // Format value with thousand separators
  const formatValue = (val: string | number) => {
    if (typeof val === "number") {
      return val.toLocaleString("fr-FR");
    }
    return val;
  };

  return (
    <div
      className={cn(
        "flex flex-col bg-white rounded-2xl border-2 border-gray-100 ",
        "overflow-hidden",
        className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-5 lg:px-8 lg:py-6 border-b border-gray-100">
        <h3 className="text-base lg:text-lg font-semibold text-gray-900 tracking-tight font-sans">
          {title}
        </h3>

        {/* Period Selector */}
        <div className="relative">
          <button
            type="button"
            className={cn(
              "flex items-center gap-2 px-4 py-2.5",
              "border border-gray-200 rounded-xl",
              "text-sm font-medium text-gray-600",
              "hover:bg-gray-50 transition-colors cursor-pointer",
            )}
            onClick={() => {
              // Simple cycle through options
              if (onPeriodChange && periodOptions && periodOptions.length > 0) {
                const currentIndex = periodOptions.indexOf(period);
                const nextIndex = (currentIndex + 1) % periodOptions.length;
                const nextPeriod = periodOptions[nextIndex];
                if (nextPeriod) {
                  onPeriodChange(nextPeriod);
                }
              }
            }}
          >
            <span>{period}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Value and Change Indicator */}
      {(value !== undefined || changePercentage !== undefined) && (
        <div className="flex items-baseline justify-between px-6 py-4 lg:px-8 lg:py-5">
          <div className="flex items-center gap-3">
            {value !== undefined && (
              <span className="text-2xl lg:text-3xl font-semibold text-gray-900">
                {formatValue(value)}
                {valueSuffix && (
                  <span className="ml-1.5 text-base lg:text-lg font-normal text-gray-500">
                    {valueSuffix}
                  </span>
                )}
              </span>
            )}

            {changePercentage !== undefined && (
              <div
                className={cn(
                  "flex items-center gap-1 text-sm font-semibold ml-2",
                  isPositive ? "text-success-600" : "text-destructive-600",
                )}
              >
                <TrendingUp className="w-4 h-4" />
                <span>{formatPercentage(changePercentage)}</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Chart Content */}
      <div className="flex-1 px-6 pb-6 lg:px-8 lg:pb-8">{children}</div>
    </div>
  );
};

export default ChartWidget;
