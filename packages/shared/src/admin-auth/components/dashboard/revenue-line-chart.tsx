"use client";

import { cn } from "@multi-app/lib/utils/generics";
import {
    Area,
    AreaChart,
    CartesianGrid,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface RevenueDataPoint {
  month: string;
  revenue: number;
  previousRevenue?: number;
}

interface RevenueLineChartProps {
  /** Data points for the chart */
  data: RevenueDataPoint[];
  /** Primary line color */
  primaryColor?: string;
  /** Secondary line color (for comparison) */
  secondaryColor?: string;
  /** Height of the chart */
  height?: number;
  /** Whether to show the comparison line */
  showComparison?: boolean;
  /** Custom class name */
  className?: string;
}

/**
 * RevenueLineChart component
 * Displays an area chart for revenue statistics with optional comparison data
 */
export const RevenueLineChart = ({
  data,
  primaryColor = "#D62F42",
  secondaryColor = "#EDB210",
  height = 280,
  showComparison = true,
  className,
}: RevenueLineChartProps) => {
  // Custom tooltip
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: Array<{ value: number; dataKey: string; color: string }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white px-3 py-2 rounded-lg shadow-lg">
          <p className="text-sm font-medium mb-1">{label}</p>
          {payload.map((entry, index) => (
            <div key={`tooltip-${index}`} className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              />
              <span className="text-sm">
                {entry.dataKey === "revenue" ? "Revenus" : "Précédent"}:{" "}
                <span className="font-semibold">
                  {entry.value.toLocaleString("fr-FR")} XOF
                </span>
              </span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  // Format Y-axis values
  const formatYAxis = (value: number) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}K`;
    }
    return value.toString();
  };

  return (
    <div className={cn("w-full", className)} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
        >
          <defs>
            {/* Primary gradient */}
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={primaryColor} stopOpacity={0.3} />
              <stop offset="100%" stopColor={primaryColor} stopOpacity={0.05} />
            </linearGradient>
            {/* Secondary gradient */}
            <linearGradient
              id="previousRevenueGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop offset="0%" stopColor={secondaryColor} stopOpacity={0.3} />
              <stop
                offset="100%"
                stopColor={secondaryColor}
                stopOpacity={0.05}
              />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#F1F5F9"
            vertical={false}
          />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#94A3B8",
              fontSize: 14,
              fontWeight: 400,
            }}
            dy={10}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#94A3B8",
              fontSize: 14,
              fontWeight: 400,
            }}
            dx={-10}
            tickFormatter={formatYAxis}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: "#94A3B8",
              strokeWidth: 1,
              strokeDasharray: "5 5",
            }}
          />
          {/* Previous revenue area (if comparison enabled) */}
          {showComparison && (
            <Area
              type="monotone"
              dataKey="previousRevenue"
              stroke={secondaryColor}
              strokeWidth={2}
              fill="url(#previousRevenueGradient)"
              dot={false}
              activeDot={{
                r: 4,
                fill: secondaryColor,
                stroke: "#fff",
                strokeWidth: 2,
              }}
            />
          )}
          {/* Current revenue area */}
          <Area
            type="monotone"
            dataKey="revenue"
            stroke={primaryColor}
            strokeWidth={2}
            fill="url(#revenueGradient)"
            dot={false}
            activeDot={{
              r: 4,
              fill: primaryColor,
              stroke: "#fff",
              strokeWidth: 2,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

// Sample data for demonstration - matching the visual curve pattern
export const sampleRevenueData: RevenueDataPoint[] = [
  { month: "Jan", revenue: 3500, previousRevenue: 1800 },
  { month: "Fev", revenue: 4200, previousRevenue: 1600 },
  { month: "Mars", revenue: 5800, previousRevenue: 1400 },
  { month: "Avr", revenue: 4000, previousRevenue: 1200 },
  { month: "Mai", revenue: 3200, previousRevenue: 1000 },
  { month: "Juin", revenue: 4500, previousRevenue: 1400 },
  { month: "Juil", revenue: 3800, previousRevenue: 1800 },
  { month: "Août", revenue: 5200, previousRevenue: 2200 },
  { month: "Sept", revenue: 5800, previousRevenue: 2000 },
  { month: "Oct", revenue: 4200, previousRevenue: 2400 },
  { month: "Nov", revenue: 5500, previousRevenue: 2200 },
  { month: "Déc", revenue: 4800, previousRevenue: 2600 },
];

export default RevenueLineChart;
