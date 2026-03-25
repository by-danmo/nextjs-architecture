"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { Logo } from "../../../ui";
import { Button } from "../../../ui/button";

interface UserGuideProps {
  className?: string;
  onStartClick?: () => void;
  collapsed?: boolean;
}

/**
 * UserGuide component displayed in the sidebar
 * Shows a guide for new users to learn how to use the dashboard
 */
export const UserGuide = ({
  className,
  onStartClick,
  collapsed = false,
}: UserGuideProps) => {
  if (collapsed) {
    return null;
  }

  return (
    <div
      className={cn(
        "relative flex flex-col justify-center items-start p-4 gap-1 rounded-xl overflow-hidden",
        "bg-primary-800",
        className,
      )}
    >
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute w-[526px] h-[337px] -left-60 -top-16"
          style={{
            background:
              "repeating-linear-gradient(-14.66deg, var(--color-primary-50) 0px, var(--color-primary-50) 20px, var(--color-primary-100) 20px, var(--color-primary-100) 40px, var(--color-primary-200) 40px, var(--color-primary-200) 60px, var(--color-primary-300) 60px, var(--color-primary-300) 80px, var(--color-primary-400) 80px, var(--color-primary-400) 100px, var(--color-primary-500) 100px, var(--color-primary-500) 120px)",
            transform: "rotate(-14.66deg)",
          }}
        />
      </div>

      {/* Logo Icon */}
      <div className="relative z-10 flex items-center justify-center  bg-white rounded-full">
        <Logo variant="image" width={50} />
      </div>

      {/* Text Content */}
      <div className="relative space-y-5 z-10 flex flex-col items-start py-6 pb-3 gap-1">
        <h3 className="text-xl font-semibold leading-7 text-white tracking-tight font-sans">
          Guide utilisateur
        </h3>
        <p className="text-sm font-normal  text-gray-200 tracking-wide">
          Apprendre et comprendre comment utiliser le tableau de bord
        </p>
      </div>

      {/* CTA Button */}
      <Button
        type="button"
        variant="neutral"
        onClick={onStartClick}
        className={cn(
          "relative z-10 w-full mt-6",
          "py-6  gap-2.5",
          "bg-white rounded-2xl",
          "text-sm font-normal text-primary leading-5 tracking-wide",
          "hover:bg-gray-50",
        )}
      >
        Commencer
      </Button>
    </div>
  );
};

export default UserGuide;
