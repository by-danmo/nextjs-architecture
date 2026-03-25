"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { MinusIcon, PlusIcon } from "lucide-react";
import { Button } from "./button";

interface QuantityControlProps {
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  className?: string;
  min?: number;
  max?: number;
}

const CONTROL_STYLE =
  "size-13 flex text-black  justify-center  hover:scale-105 ";

export const QuantityControl = ({
  value,
  onIncrement,
  onDecrement,
  className,
  min = 1,
  max,
}: QuantityControlProps) => {
  const isMinDisabled = value <= min;
  const isMaxDisabled = max !== undefined && value >= max;

  return (
    <div
      className={cn(
        "flex items-center justify-between w-[14rem] h-[5rem] rounded-full bg-gray-100  px-4",
        className,
      )}
    >
      <Button
        variant="ghost"
        className={`${CONTROL_STYLE}  rounded-full disabled:opacity-30 !p-0`}
        onClick={onDecrement}
        disabled={isMinDisabled}
        aria-label="Diminuer la quantité"
      >
        <MinusIcon className="size-9" />
      </Button>

      <span className="text-base font-medium select-none">{value}</span>

      <Button
        variant="ghost"
        className={`${CONTROL_STYLE}   rounded-full disabled:opacity-30 !p-0`}
        onClick={onIncrement}
        disabled={isMaxDisabled}
        aria-label="Augmenter la quantité"
      >
        <PlusIcon className="size-9" />
      </Button>
    </div>
  );
};
