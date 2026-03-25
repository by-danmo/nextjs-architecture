import { cn } from "@multi-app/lib/utils/generics";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Spinner } from "../icons/spinner.icon";
import Flex from "../layout/helpers/flex";

export const buttonVariants = cva(
  "inline-flex items-center text-base justify-center cursor-pointer  w-full  transition-colors focus:outline-none  disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: " bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-white hover:bg-destructive/90",
        ghost: "w-max bg-transparent hover:bg-muted ",
        outline: "border border-black bg-transparent hover:bg-muted/50",
        neutral: " bg-gray-100 text-black hover:bg-gray-200",
        cancel: " bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium",
        "only-icon":
          " size-[4.8rem] hover:bg-white/30 aspect-square border border-white !p-0 flex-full-center",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        "link-muted":
          "w-auto bg-transparent !p-0 text-primary hover:underline text-sm ",
      },
      size: {
        default: "px-[3.6rem] py-[2.2rem]",
        sm: "px-[2.6rem] py-[1.6rem]",
        lg: "px-[4rem] py-[2.4rem]",
      },

      shape: {
        rounded: "rounded-full ",
        square: "rounded-none",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "rounded",
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  icon?: React.ReactNode | (() => React.ReactNode);
  fullWidth?: boolean;
  invertIconPosition?: boolean;
}

export const Button = ({
  children,
  className,
  variant,
  size,
  shape,
  icon,
  invertIconPosition = false,
  ...props
}: PropsWithChildren<ButtonProps>) => {
  const disabled = props.disabled || props.isLoading;

  return (
    <button
      className={cn(
        buttonVariants({ variant, size, shape }),
        { "w-full": props.fullWidth },
        className,
      )}
      {...props}
      disabled={disabled}
    >
      <Flex settings={{ align: "center", spacing: "gap-3" }}>
        <div
          className={cn("flex items-center **:leading-0  gap-3", {
            "flex-row-reverse": invertIconPosition,
          })}
        >
          {icon && (
            <span className="shrink-0 ">
              {typeof icon === "function" ? icon() : icon}
            </span>
          )}
          {children}
          {props.isLoading && <Spinner />}
        </div>
      </Flex>
    </button>
  );
};
