"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { ArrowDown01, ArrowDownAZ, ArrowDownZA, ArrowUp01 } from "lucide-react";
import { createPortal } from "react-dom";
import { Button } from "../../../../ui/button";
import type { SortDropdownProps } from "./types";

export const SortDropdown = ({
  isOpen,
  onClose,
  options,
  selectedSort,
  onSortChange,
  onClear,
  onApply,
  position,
}: SortDropdownProps) => {
  if (!isOpen || typeof document === "undefined") return null;

  return createPortal(
    <>
      <div className="fixed inset-0 z-[9998]" onClick={onClose} />
      <div
        className="fixed z-[9999] w-[320px] bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden"
        style={{ top: position.top, right: position.right }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-dashed border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Trier par</h3>
          <Button
            type="button"
            variant="neutral"
            size="sm"
            onClick={onClear}
            className="px-4 rounded-xl py-2 w-fit text-sm font-medium "
          >
            Effacer tout
          </Button>
        </div>

        {/* Sort Options */}
        <div className="p-4 space-y-4 max-h-[400px] overflow-y-auto">
          {options.map((option) => (
            <div key={option.id} className="space-y-2">
              <h4 className="text-base font-semibold text-gray-900">
                {option.label}
              </h4>
              <div className="space-y-1">
                {/* Ascending */}
                <button
                  type="button"
                  onClick={() => onSortChange(option.id, "asc")}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                    selectedSort?.id === option.id &&
                      selectedSort?.direction === "asc"
                      ? "bg-primary-50 text-primary"
                      : "hover:bg-gray-50 text-gray-600",
                  )}
                >
                  {option.type === "text" ? (
                    <ArrowDownAZ className="w-5 h-5" />
                  ) : (
                    <ArrowDown01 className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">
                    {option.type === "text"
                      ? "Ascendant (A → Z)"
                      : "Du plus bas au plus élevé"}
                  </span>
                </button>

                {/* Descending */}
                <button
                  type="button"
                  onClick={() => onSortChange(option.id, "desc")}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                    selectedSort?.id === option.id &&
                      selectedSort?.direction === "desc"
                      ? "bg-primary-50 text-primary"
                      : "hover:bg-gray-50 text-gray-600",
                  )}
                >
                  {option.type === "text" ? (
                    <ArrowDownZA className="w-5 h-5" />
                  ) : (
                    <ArrowUp01 className="w-5 h-5" />
                  )}
                  <span className="text-sm font-medium">
                    {option.type === "text"
                      ? "Descendant (Z → A)"
                      : "Du plus élevé au plus bas"}
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100">
          <Button
            type="button"
            variant="default"
            onClick={onApply}
            className="w-full py-4 rounded-xl text-base font-medium"
          >
            Appliquer le tri
          </Button>
        </div>
      </div>
    </>,
    document.body,
  );
};

export default SortDropdown;
