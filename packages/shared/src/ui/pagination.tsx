"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { LongRightArrowIcon } from "../icons/arrows-icons";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
  className,
}: PaginationProps) => {
  const maxVisiblePages = 4;

  // Génère les numéros de pages à afficher
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages + 1) {
      // Si on a peu de pages, on les affiche toutes
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Affiche les 4 premières pages
      for (let i = 1; i <= maxVisiblePages; i++) {
        pages.push(i);
      }
      // Ajoute les points de suspension
      pages.push("...");
      // Ajoute la dernière page
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = getPageNumbers();

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className={cn("flex items-center gap-4", className)}>
      {/* Pages Numbers */}
      <div className="flex items-center gap-2">
        {pages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="size-[4.9rem] flex items-center justify-center text-base text-gray-600"
              >
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={cn(
                "size-[4.9rem] rounded-full flex items-center justify-center text-base transition-all",
                isActive
                  ? "bg-white border border-primary text-primary font-medium"
                  : "bg-gray-50 text-black hover:bg-gray-100",
              )}
            >
              {String(pageNumber).padStart(2, "0")}
            </button>
          );
        })}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-2 ml-auto">
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className={cn(
            "size-[4.9rem] rounded-full flex items-center justify-center transition-all",
            currentPage === 1
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-50 text-black hover:bg-gray-100",
          )}
          aria-label="Page précédente"
        >
          <LongRightArrowIcon className="size-6 rotate-180" />
        </button>

        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className={cn(
            "size-[4.9rem] rounded-full flex items-center justify-center transition-all",
            currentPage === totalPages
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-black text-white hover:bg-black/80",
          )}
          aria-label="Page suivante"
        >
          <LongRightArrowIcon className="size-6" />
        </button>
      </div>
    </div>
  );
};

export { Pagination };
export type { PaginationProps };
