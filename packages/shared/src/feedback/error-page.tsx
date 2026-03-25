"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";

interface ErrorPageProps {
  error?: Error;
  reset?: () => void;
  className?: string;
  title?: string;
  description?: string;
}

export function ErrorPage({
  error,
  reset,
  className,
  title = "Une erreur est survenue",
  description = "Nous ne parvenons pas à charger cette page. Veuillez réessayer.",
}: ErrorPageProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center min-h-[50vh] p-8 text-center",
        className,
      )}
    >
      <div
        className={cn(
          "w-full max-w-md p-10 bg-white border border-gray-100 shadow-sm rounded-2xl flex flex-col items-center",
          "transition-all duration-700 ease-out transform",
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        )}
      >
        <div className="w-12 h-12 mb-6 rounded-full bg-gray-50 flex items-center justify-center">
          <span className="text-gray-400 text-xl font-serif italic">!</span>
        </div>

        <h2 className="text-xl font-medium tracking-tight text-gray-900 mb-3">
          {title}
        </h2>

        <p className="text-gray-500 mb-8 text-sm leading-relaxed max-w-[280px]">
          {error?.message || description}
        </p>

        {reset && (
          <Button
            onClick={reset}
            variant="outline"
            size="sm"
            className="group px-6 rounded-full border-gray-200 text-gray-600 hover:text-black hover:border-black transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5 mr-2 transition-transform duration-500 group-hover:rotate-180 group-active:rotate-90" />
            <span>Réessayer</span>
          </Button>
        )}
      </div>
    </div>
  );
}
