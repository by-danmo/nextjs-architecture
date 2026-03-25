import { m } from "@multi-app/lib/motion";
import { cn } from "@multi-app/lib/utils/generics";
import { useEffect, useState } from "react";
import "../../styles.css";
import { Logo } from "../../ui/logo";

export const HomeLoader = ({
  onLoadingComplete,
  className,
}: {
  onLoadingComplete?: () => void;
  className?: string;
}) => {
  const [progress, setProgress] = useState(0);
  const [actualProgress, setActualProgress] = useState(0);

  useEffect(() => {
    let mounted = true;

    // Détection du chargement réel de la page
    const updateLoadingProgress = () => {
      if (!mounted) return;

      // Utilise les API de performance du navigateur
      const perfData = performance.getEntriesByType(
        "navigation",
      )[0] as PerformanceNavigationTiming;

      if (perfData) {
        const total = perfData.loadEventEnd;
        const current = performance.now();

        if (total > 0) {
          // Page complètement chargée
          setActualProgress(100);
        } else {
          // Calcul basé sur les ressources chargées
          const resources = performance.getEntriesByType("resource");
          const totalResources = document.querySelectorAll(
            'img, script, link[rel="stylesheet"]',
          ).length;
          const loadedResources = resources.length;

          const calculatedProgress =
            totalResources > 0
              ? Math.min(
                  95,
                  Math.floor((loadedResources / totalResources) * 100),
                )
              : Math.min(95, Math.floor((current / 2000) * 100)); // Fallback basé sur le temps

          setActualProgress(calculatedProgress);
        }
      }
    };

    // Vérifie si la page est déjà chargée
    if (document.readyState === "complete") {
      setActualProgress(100);
    } else {
      // Écoute les événements de chargement
      const handleLoad = () => {
        setActualProgress(100);
      };

      const handleDOMContentLoaded = () => {
        setActualProgress(70);
      };

      window.addEventListener("load", handleLoad);
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

      // Mise à jour progressive pendant le chargement
      const checkInterval = setInterval(updateLoadingProgress, 100);

      return () => {
        mounted = false;
        clearInterval(checkInterval);
        window.removeEventListener("load", handleLoad);
        document.removeEventListener(
          "DOMContentLoaded",
          handleDOMContentLoaded,
        );
      };
    }

    return () => {
      mounted = false;
    };
  }, []);

  // Animation smooth du compteur vers la progression réelle
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= actualProgress) {
          if (actualProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              onLoadingComplete?.();
            }, 300);
          }
          return prev;
        }

        // Animation fluide vers la valeur réelle
        const diff = actualProgress - prev;
        const increment = Math.max(1, Math.ceil(diff / 10));

        return Math.min(prev + increment, actualProgress);
      });
    }, 50);

    return () => clearInterval(interval);
  }, [actualProgress, onLoadingComplete]);

  return (
    <m.div
      className={cn("bg-primary fixed  size-full z-9999 h-screen", className)}
      exit={{ y: "-100%" }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 55,
        ease: "easeInOut",
      }}
    >
      <div className="h-full flex-full-center">
        <Logo size="lg" textColor="white" dotColor="yellow" />
      </div>
      <footer className="absolute right-[6.4rem] bottom-[4.8rem]">
        <h2 className="text-[8rem] text-white font-bold tabular-nums">
          {progress}
        </h2>
      </footer>
    </m.div>
  );
};
