"use client";
import { cn } from "@multi-app/lib/utils/generics";
import type { ComponentProps, PropsWithChildren } from "react";

const HeroLayout = ({
  children,
  ...props
}: PropsWithChildren<ComponentProps<"section">>) => {
  return (
    <section
      {...props}
      className={cn(
        "relative rounded-lg sm:rounded-xl md:rounded-2xl overflow-hidden",
        props.className,
      )}
    >
      <div
        className="h-[calc(100svh-1rem)] overflow-hidden sm:h-[calc(100vh-1.4rem)] md:h-[calc(100vh-1.6rem)] lg:h-[calc(100vh-1.8rem)]"
        style={{
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
        }}
      >
        {children}
      </div>
    </section>
  );
};

export default HeroLayout;
