"use client";

import { cn } from "@multi-app/lib/utils/generics";
import {
    Bar,
    BarChart,
    CartesianGrid,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface OrdersDataPoint {
  month: string;
  orders: number;
}

interface OrdersBarChartProps {
  /** Data points for the chart */
  data: OrdersDataPoint[];
  /** Whether to show the average line */
  showAverage?: boolean;
  /** Custom bar color */
  barColor?: string;
  /** Height of the chart */
  height?: number;
  /** Custom class name */
  className?: string;
}

/**
 * OrdersBarChart component
 * Displays a bar chart for order statistics with an optional average reference line
 */
export const OrdersBarChart = ({
  data,
  showAverage = true,
  barColor = "#EDB210",
  height = 280,
  className,
}: OrdersBarChartProps) => {
  // Calculate average
  const average =
    data.length > 0
      ? Math.round(data.reduce((sum, d) => sum + d.orders, 0) / data.length)
      : 0;

  // Custom tooltip
  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: Array<{ value: number }>;
    label?: string;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-slate-900 text-white px-3 py-2 rounded-lg shadow-lg">
          <p className="text-sm font-medium">{label}</p>
          <p className="text-lg font-semibold">
            {payload[0]?.value.toLocaleString("fr-FR")} commandes
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom average label component
  const AverageLabel = ({
    viewBox,
  }: {
    viewBox?: { x: number; y: number };
  }) => {
    if (!viewBox) return null;
    return (
      <g>
        <rect
          className=""
          x={viewBox.x - 10}
          y={viewBox.y - 12}
          width={36}
          height={24}
          rx={4}
          fill="#0E0D0C"
        />
        <text
          x={viewBox.x + 8}
          y={viewBox.y + 4}
          fill="#FFFFFF"
          fontSize={12}
          fontWeight={400}
          textAnchor="middle"
        >
          Avg
        </text>
      </g>
    );
  };

  return (
    <div className={cn("w-full ", className)} style={{ height }}>
      <ResponsiveContainer className="[&:>]" width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: -20, bottom: 0 }}
          barCategoryGap="20%"
        >
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
            dx={-5}
            tickFormatter={(value) =>
              value >= 1000 ? `${value / 1000}K` : value
            }
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
          />
          {showAverage && (
            <ReferenceLine
              y={average}
              stroke="#0E0D0C"
              strokeDasharray="5 5"
              strokeWidth={1.5}
              label={<AverageLabel />}
            />
          )}
          <Bar
            dataKey="orders"
            fill={barColor}
            radius={[8, 8, 0, 0]}
            maxBarSize={40}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

// Sample data for demonstration
export const sampleOrdersData: OrdersDataPoint[] = [
  { month: "Jan", orders: 280 },
  { month: "Fev", orders: 350 },
  { month: "Mar", orders: 450 },
  { month: "Avr", orders: 380 },
  { month: "Mai", orders: 420 },
  { month: "Juin", orders: 320 },
  { month: "Juil", orders: 290 },
  { month: "Ao...", orders: 340 },
  { month: "Sep", orders: 300 },
];

export default OrdersBarChart;
