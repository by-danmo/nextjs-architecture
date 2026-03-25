import { cn } from "@multi-app/lib/utils/generics";
import type { HTMLAttributes, PropsWithChildren } from "react";
import "../../styles.css";

export interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Maximum width of the container
   * @default "140rem"
   */
  maxWidth?: `${number}px` | `${number}rem`;

  /**
   * HTML element to render
   * @default "div"
   */
  as?: "div" | "section" | "main" | "footer" | "header" | "article" | "aside";

  /**
   * Whether to center the container
   * @default true
   */
  centered?: boolean;

  /**
   * Padding configuration
   */
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

const paddingVariants = {
  none: "",
  sm: "px-2 sm:px-4",
  md: "px-4 sm:px-6",
  lg: "px-4 sm:px-8 lg:px-12",
  xl: "px-4 sm:px-20",
};

const Container = ({
  maxWidth = "150rem",
  as: Component = "div",
  centered = true,
  padding = "xl",
  children,
  className,
  style,
  ...props
}: PropsWithChildren<ContainerProps>) => {
  return (
    <Component
      style={{ maxWidth, ...style }}
      className={cn(centered && "mx-auto", paddingVariants[padding], className)}
      {...(props as any)}
    >
      {children}
    </Component>
  );
};

export { Container };
