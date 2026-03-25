"use client";

import { cn } from "@multi-app/lib/utils/generics";
import { MoreVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ActionCellProps } from "./types";

export const ActionCell = ({ actions }: ActionCellProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [pos, setPos] = useState({ top: 0, right: 0 });
  const btnRef = useRef<HTMLButtonElement>(null);

  const calcPos = () => {
    if (btnRef.current) {
      const r = btnRef.current.getBoundingClientRect();
      setPos({ top: r.bottom + 4, right: window.innerWidth - r.right });
    }
  };

  const handleOpen = () => {
    calcPos();
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;
    const update = () => calcPos();
    window.addEventListener("scroll", update, true);
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update, true);
      window.removeEventListener("resize", update);
    };
  }, [isOpen]);

  return (
    <div className="flex justify-end">
      <button
        ref={btnRef}
        type="button"
        onClick={handleOpen}
        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
      >
        <MoreVertical className="size-9 text-gray-400" />
      </button>

      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <>
            <div
              className="fixed inset-0 z-[9998]"
              onClick={() => setIsOpen(false)}
            />
            <div
              className="fixed z-[9999] py-3 bg-white border border-gray-100 rounded-2xl shadow-xl min-w-[200px]"
              style={{ top: pos.top, right: pos.right }}
            >
              {actions.map((action, idx) => (
                <button
                  key={idx}
                  type="button"
                  disabled={action.disabled}
                  onClick={() => {
                    if (action.disabled) return;
                    action.onClick();
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-5 py-3 text-left text-base font-medium transition-colors",
                    action.disabled
                      ? "opacity-35 cursor-not-allowed"
                      : "hover:bg-gray-50",
                    action.variant === "destructive"
                      ? "text-[#F43F5E]"
                      : "text-gray-900",
                  )}
                >
                  {action.icon && (
                    <span
                      className={cn(
                        "shrink-0",
                        action.variant === "destructive"
                          ? "text-[#F43F5E]"
                          : "text-gray-900",
                      )}
                    >
                      {action.icon}
                    </span>
                  )}
                  <span>{action.label}</span>
                </button>
              ))}
            </div>
          </>,
          document.body,
        )}
    </div>
  );
};

export default ActionCell;
