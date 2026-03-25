"use client";
import { cn } from "@multi-app/lib/utils/generics";
import { cva, type VariantProps } from "class-variance-authority";
import { useState, type InputHTMLAttributes } from "react";
import { InputError } from "../feedback/input-error";
import { EyeCloseIcon, EyeOpenIcon } from "../icons/eyes.icon";
import { ShouldShow } from "../layout/helpers/should-show";

const inputVariants = cva(
  [
    "w-full",
    "outline-none focus-visible:ring-1 ",
    "disabled:opacity-30 disabled:cursor-not-allowed disabled:pointer-events-none",
  ],
  {
    variants: {
      variant: {
        default: "bg-gray-50 border border-gray-200 rounded-full w-full",
        outline: "border border-gray-300 bg-transparent",
        filled: "bg-gray-100",
        auth: "py-[1.8rem] border rounded-2xl border-auth-input-stroke",
      },
      sizes: {
        default: "pl-[2.4rem] py-[1.8rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      sizes: "default",
    },
  },
);

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  label?: string;
  error?: string;
}

export const Input = ({
  className,
  label,
  variant,
  error,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = props.type === "password";

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const inputType = new Map([
    [true, showPassword ? "text" : "password"],
    [false, props.type],
  ]);

  return (
    <div className="w-full ">
      <div className="relative">
        <ShouldShow when={variant !== "auth" && props.placeholder !== ""}>
          <label
            className={cn(
              "mb-2 block font-medium text-gray-500 transition-all duration-200",
            )}
          >
            {label}
          </label>
        </ShouldShow>
        <input
          className={cn(inputVariants({ variant }), "peer", className, {
            "border-destructive focus:ring-destructive": !!error,
            "cursor-not-allowed": props.disabled,
          })}
          // autoComplete="off"
          placeholder={props.placeholder}
          {...props}
          type={inputType.get(isPassword)}
        />
        {label && variant === "auth" && (
          <label
            className={cn(
              "mb-2 block text-[1.6rem] font-medium text-gray-500 transition-all duration-200",
              variant === "auth"
                ? [
                    "absolute left-8 top-1/2 -translate-y-1/2 mb-0 font-normal bg-white pointer-events-none",
                    "peer-focus:-translate-y-[3.7rem] peer-focus:text-[1.2rem]  ",
                    "peer-[:not(:placeholder-shown)]:-translate-y-[3.7rem] peer-[:not(:placeholder-shown)]:text-[1.2rem] ",
                  ]
                : "pointer-events-none",
              {
                "text-destructive": !!error,
              },
            )}
          >
            {label}
          </label>
        )}

        {/* Show Icon Password and is Action */}

        <div className=" flex items-center justify-center absolute-y-center right-7">
          <ShouldShow
            when={props.type === "password"}
            show={
              <span
                className="cursor-pointer "
                role="button"
                onClick={toggleShowPassword}
              >
                <ShouldShow
                  when={showPassword}
                  show={<EyeOpenIcon />}
                  elseShow={<EyeCloseIcon />}
                />
              </span>
            }
          />
        </div>
      </div>

      <InputError error={error} />
    </div>
  );
};
