"use client";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@multi-app/lib/utils/generics";
import { InputError } from "../feedback/input-error";

interface CheckboxProps
  extends React.ComponentProps<typeof CheckboxPrimitive.Root> {
  error?: string;
  label?: React.ReactNode;
  labelClassName?: string;
}

function Checkbox({
  className,
  error,
  label,
  labelClassName,
  ...props
}: CheckboxProps) {
  return (
    <div className="w-full">
      <div className="flex gap-3">
        <CheckboxPrimitive.Root
          data-slot="checkbox"
          className={cn(
            "peer border-2 border-gray-400 dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-8 shrink-0 rounded-[4px]  shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
            {
              "border-destructive": !!error,
            },
            className,
          )}
          {...props}
        >
          <CheckboxPrimitive.Indicator
            data-slot="checkbox-indicator"
            className="grid place-content-center text-current transition-none"
          >
            <CheckIcon className="size-5" />
          </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        {label && (
          <span className={cn("text-sm text-gray-700", labelClassName)}>
            {label}
          </span>
        )}
      </div>
      <InputError error={error} />
    </div>
  );
}

export { Checkbox };
