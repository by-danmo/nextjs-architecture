import { cn } from "@multi-app/lib/utils/generics";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import { CheckCircle, InfoIcon } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { ErrorIcon } from "../icons";
import { Flex } from "../layout";

const calloutVariant = cva("rounded-2xl py-6 px-8 [&_svg]:mt-1", {
  variants: {
    variant: {
      default: "bg-primary-50 text-primary-700",
      success: "bg-green-50 text-green-600",
      error: "bg-red-50 text-red-500",
      warn: "bg-yellow-50 text-yellow-600",
    },
    sizes: {
      default: "fs-18 [&_svg]:size-9",
      sm: "text-sm [&_svg]:size-6",
      md: "text-base [&_svg]:size-7",
      lg: "text-lg [&_svg]:size-8",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const variantIcon: Record<string, () => ReactNode> = {
  default: (className?: string) => (
    <InfoIcon className={cn("size-9 text-primary-700", className)} />
  ),
  success: (className?: string) => (
    <CheckCircle className={cn("size-9 text-green-600", className)} />
  ),
  error: (className?: string) => (
    <ErrorIcon className={cn("size-9 text-red-500", className)} />
  ),
  warn: (className?: string) => (
    <ErrorIcon className={cn("size-9 !text-yellow-600", className)} />
  ),
};

type CalloutProps = ComponentProps<"div"> & VariantProps<typeof calloutVariant>;

const Callout = ({
  variant = "default",
  sizes,
  children,
  ...props
}: CalloutProps) => {
  return (
    <Flex
      settings={{ shouldTakeSameSpace: false, align: "start" }}
      className={cn(calloutVariant({ variant, sizes }), props.className)}
    >
      {variant && variantIcon[variant] && variantIcon[variant]()}

      {children}
    </Flex>
  );
};

export default Callout;
