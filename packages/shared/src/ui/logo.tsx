import Image from "next/image";
import Link from "next/link";
import type { HTMLAttributes } from "react";
import logo from "../assets/simple-logo.svg";

interface LogoProps extends HTMLAttributes<HTMLElement> {
  width?: number;
  height?: number;
  variant?: "text" | "image";
  href?: string;
  textColor?: "white" | "red" | "black";
  dotColor?: "red" | "yellow";
  size?: "md" | "lg" | "xxl";
  siteName?: string;
  logoUrl?: string;
}

const logoVariant = {
  text: {
    white: "text-white",
    red: "text-primary",
    black: "text-black",
  },
  dot: {
    red: "text-primary",
    yellow: "text-secondary",
  },
};

const logoSizes = {
  md: "text-[4rem]",
  lg: "text-[8rem]",
  xxl: "text-[30rem]",
};

const Logo = ({
  width,
  height,
  variant = "text",
  href = "/",
  textColor = "black",
  dotColor = "red",
  className,
  size = "md",
  siteName = "SheSold",
  logoUrl,
  ...props
}: LogoProps) => {
  const textClass = logoVariant.text[textColor];
  const dotClass = logoVariant.dot[dotColor];
  const selectedSize = logoSizes[size];

  const logoContent =
    variant === "image" ? (
      <Image
        src={logo}
        alt={siteName}
        width={width}
        height={height}
        className={className}
      />
    ) : (
      <h2 style={{ width, height }} className={className} {...props}>
        <Link
          href={href}
          className={`${selectedSize} whitespace-nowrap font-medium hover:opacity-80 transition-opacity ${textClass}`}
        >
          {siteName}
          <span className={dotClass}>.</span>
        </Link>
      </h2>
    );

  return logoContent;
};

export { Logo };
export type { LogoProps };
