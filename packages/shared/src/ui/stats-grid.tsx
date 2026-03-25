"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: string;
  label: string;
  showBorder?: boolean;
  className?: string;
}

const AnimatedStat = ({
  value,
  label,
  showBorder = true,
  className,
}: AnimatedStatProps) => {
  const [displayValue, setDisplayValue] = useState("0");
  const [isVisible, setIsVisible] = useState(false);
  const statRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    if (statRef.current) {
      observer.observe(statRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Extract number and suffix (%, +, M, etc.)
    const match = value.match(/^([\d.]+)(.*)$/);
    if (!match || !match[1]) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseFloat(match[1]);
    const suffix = match[2] || "";
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = targetNumber / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(current + increment, targetNumber);

      if (step >= steps) {
        setDisplayValue(`${targetNumber}${suffix}`);
        clearInterval(timer);
      } else {
        // Format based on whether it's a decimal
        const formatted =
          targetNumber % 1 === 0
            ? Math.floor(current).toString()
            : current.toFixed(2);
        setDisplayValue(`${formatted}${suffix}`);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div
      ref={statRef}
      className={cn(
        "flex flex-col items-center justify-center py-12 px-8",
        { "border-r border-gray-200": showBorder },
        className,
      )}
    >
      <h3 className="text-primary font-bold mb-2">{displayValue}</h3>
      <p className="text-lg text-gray-500 text-center">{label}</p>
    </div>
  );
};

interface StatsGridProps {
  stats: Array<{
    value: string;
    label: string;
  }>;
  className?: string;
}

export const StatsGrid = ({ stats, className }: StatsGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-0 max-w-[120rem] mx-auto",
        className,
      )}
    >
      {stats.map((stat, index) => (
        <AnimatedStat
          key={index}
          value={stat.value}
          label={stat.label}
          showBorder={index < stats.length - 1}
        />
      ))}
    </div>
  );
};
