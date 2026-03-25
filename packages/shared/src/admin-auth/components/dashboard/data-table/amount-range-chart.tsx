"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { useMemo } from "react";
import type { AmountRangeChartProps } from "./types";

export const AmountRangeChart = ({
  data,
  min,
  max,
  selectedMin,
  selectedMax,
  onRangeChange,
}: AmountRangeChartProps) => {
  const buckets = 30;
  const bucketSize = (max - min) / buckets;

  // Create histogram buckets
  const histogram = useMemo(() => {
    const hist = new Array(buckets).fill(0);
    data.forEach((value) => {
      const bucketIndex = Math.min(
        Math.floor((value - min) / bucketSize),
        buckets - 1,
      );
      if (bucketIndex >= 0) {
        hist[bucketIndex]++;
      }
    });
    return hist;
  }, [data, min, bucketSize]);

  const histMax = Math.max(...histogram, 1);

  return (
    <div className="space-y-3">
      {/* Histogram */}
      <div className="relative h-20 flex items-end gap-0.5">
        {histogram.map((count, index) => {
          const bucketMin = min + index * bucketSize;
          const bucketMax = min + (index + 1) * bucketSize;
          const isInRange =
            bucketMin >= selectedMin && bucketMax <= selectedMax;

          return (
            <div
              key={index}
              className={cn(
                "flex-1 rounded-t-sm transition-colors",
                isInRange ? "bg-primary" : "bg-primary/30",
              )}
              style={{
                height: `${(count / histMax) * 100}%`,
                minHeight: "4px",
              }}
            />
          );
        })}

        {/* Range indicators */}
        <div
          className="absolute bottom-0 w-3 h-3 bg-white border-2 border-gray-300 rounded-full -translate-x-1/2"
          style={{
            left: `${((selectedMin - min) / (max - min)) * 100}%`,
          }}
        />
        <div
          className="absolute bottom-0 w-3 h-3 bg-white border-2 border-gray-300 rounded-full -translate-x-1/2"
          style={{
            left: `${((selectedMax - min) / (max - min)) * 100}%`,
          }}
        />
      </div>

      {/* Range inputs */}
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <label className="text-xs font-medium text-gray-500 mb-1 block">
            Min
          </label>
          <input
            type="text"
            value={`XOF ${selectedMin.toLocaleString("fr-FR")}`}
            onChange={(e) => {
              const value = parseInt(e.target.value.replace(/\D/g, "")) || 0;
              onRangeChange(Math.min(value, selectedMax), selectedMax);
            }}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
        <div className="flex-1">
          <label className="text-xs font-medium text-gray-500 mb-1 block">
            Max
          </label>
          <input
            type="text"
            value={`XOF ${selectedMax.toLocaleString("fr-FR")}`}
            onChange={(e) => {
              const value = parseInt(e.target.value.replace(/\D/g, "")) || 0;
              onRangeChange(selectedMin, Math.max(value, selectedMin));
            }}
            className="w-full px-3 py-2.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default AmountRangeChart;
