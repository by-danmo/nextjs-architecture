"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { Check, X } from "lucide-react";

// ============================================================================
// Types
// ============================================================================

export interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  /** Primary action button (right side, red) */
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  /** Secondary action button (left side, gray) - optional */
  secondaryAction?: {
    label: string;
    onClick: () => void;
  };
  /** Single centered action (for simple confirmations) */
  singleAction?: {
    label: string;
    onClick: () => void;
  };
  /** Custom icon color - defaults to green */
  iconColor?: "green" | "red" | "blue" | "yellow";
}

// ============================================================================
// Icon Color Config
// ============================================================================

const iconColorConfig = {
  green: "bg-[#22C55E]",
  red: "bg-[#D62F42]",
  blue: "bg-[#3B82F6]",
  yellow: "bg-[#EAB308]",
};

// ============================================================================
// Main Component
// ============================================================================

export const SuccessModal = ({
  isOpen,
  onClose,
  title = "Le produit a été ajouté à votre liste de produits !",
  description = "Votre produit est prêt. Rendez-vous dans la liste des produits pour apporter des modifications ou consulter les détails.",
  primaryAction,
  secondaryAction,
  singleAction,
  iconColor = "green",
}: SuccessModalProps) => {
  if (!isOpen) return null;

  // Determine which action layout to use
  const hasTwoActions = primaryAction && secondaryAction;
  const hasSingleAction = singleAction && !hasTwoActions;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px] z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={cn(
          "fixed z-50",
          "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
          "w-[420px] max-w-[calc(100vw-40px)]",
          "bg-white rounded-2xl shadow-2xl",
          "overflow-hidden",
        )}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 hover:bg-gray-100 rounded-lg transition-colors z-10"
        >
          <X className="w-6 h-6 text-gray-900" strokeWidth={2} />
        </button>

        {/* Content */}
        <div className="flex flex-col items-center px-6 pt-10 pb-6">
          {/* Success Icon */}
          <div
            className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mb-6",
              iconColorConfig[iconColor],
            )}
          >
            <Check className="w-8 h-8 text-white" strokeWidth={3} />
          </div>

          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-900 text-center mb-2">
            {title}
          </h2>

          {/* Description */}
          <p className="text-sm text-gray-500 text-center max-w-[320px]">
            {description}
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 px-6 pb-6">
          {/* Two Actions Layout */}
          {hasTwoActions && (
            <>
              <button
                type="button"
                onClick={secondaryAction.onClick}
                className={cn(
                  "flex-1 px-4 py-3 text-base font-medium",
                  "bg-white border border-gray-200 rounded-xl",
                  "text-gray-900 hover:bg-gray-50 transition-colors",
                )}
              >
                {secondaryAction.label}
              </button>
              <button
                type="button"
                onClick={primaryAction.onClick}
                className={cn(
                  "flex-1 px-4 py-3 text-base font-medium",
                  "bg-[#D62F42] rounded-xl",
                  "text-white hover:bg-[#C12A3B] transition-colors",
                )}
              >
                {primaryAction.label}
              </button>
            </>
          )}

          {/* Single Action Layout */}
          {hasSingleAction && (
            <button
              type="button"
              onClick={singleAction.onClick}
              className={cn(
                "w-full px-4 py-3 text-base font-medium",
                "bg-[#D62F42] rounded-xl",
                "text-white hover:bg-[#C12A3B] transition-colors",
              )}
            >
              {singleAction.label}
            </button>
          )}

          {/* Default: Close only */}
          {!hasTwoActions && !hasSingleAction && (
            <button
              type="button"
              onClick={onClose}
              className={cn(
                "w-full px-4 py-3 text-base font-medium",
                "bg-[#D62F42] rounded-xl",
                "text-white hover:bg-[#C12A3B] transition-colors",
              )}
            >
              Fermer
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default SuccessModal;
