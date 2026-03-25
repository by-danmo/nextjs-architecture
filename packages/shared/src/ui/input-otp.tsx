"use client";

import { OTPInput, OTPInputContext } from "input-otp";
import { MinusIcon } from "lucide-react";
import * as React from "react";

import { cn } from "@multi-app/lib/utils/generics";
import { InputError } from "../feedback/input-error";

function InputOTP({
  className,
  containerClassName,
  error,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string;
  error?: string;
}) {
  return (
    <div className="w-full">
      <OTPInput
        data-slot="input-otp"
        containerClassName={cn(
          "flex items-center gap-2 has-disabled:opacity-50",
          containerClassName,
        )}
        className={cn("disabled:cursor-not-allowed", className)}
        {...props}
      />
      <InputError error={error} />
    </div>
  );
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn("flex items-center gap-3", className)}
      {...props}
    />
  );
}

function InputOTPSlot({
  index,
  className,
  error,
  ...props
}: React.ComponentProps<"div"> & {
  index: number;
  error?: string;
}) {
  const inputOTPContext = React.useContext(OTPInputContext);
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {};

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        "relative flex h-[5.6rem] w-[5.6rem] items-center justify-center rounded-2xl border border-auth-input-stroke text-lg transition-all outline-none first:border-l data-[active=true]:z-10 data-[active=true]:border-primary data-[active=true]:ring-1 data-[active=true]:ring-primary",
        {
          "border-destructive": !!error,
        },
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  );
}

function InputOTPSeparator({ ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  );
}

export { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot };
