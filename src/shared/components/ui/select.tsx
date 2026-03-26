"use client";

import { cn } from "@/lib/utils/generics";
import { ChevronDown, X } from "lucide-react";
import * as React from "react";
import { InputError } from "../feedback/input-error";

export interface SelectOption {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  direction?: "up" | "down";
}

export const Select = ({
  options,
  value,
  onChange,
  placeholder = "Sélectionnez une option",
  label,
  error,
  disabled = false,
  className,
  direction = "down",
}: SelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectRef = React.useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <div ref={selectRef} className="relative">
        <button
          type="button"
          onClick={() => !disabled && setIsOpen(!isOpen)}
          disabled={disabled}
          className={cn(
            "w-full flex items-center justify-between gap-2",
            "px-4 py-3 text-sm text-left",
            "bg-white border border-gray-200 rounded-lg",
            "transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            isOpen && "ring-2 ring-primary/20 border-primary",
            error && "border-destructive focus:ring-destructive/20",
            className,
          )}
        >
          <span
            className={cn(selectedOption ? "text-gray-900" : "text-gray-400")}
          >
            {selectedOption?.icon && (
              <span className="mr-2">{selectedOption.icon}</span>
            )}
            {selectedOption?.label || placeholder}
          </span>
          <ChevronDown
            className={cn(
              "w-5 h-5 text-gray-400 transition-transform",
              isOpen && "rotate-180",
            )}
          />
        </button>

        {isOpen && (
          <div
            className={cn(
              "absolute z-50 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden",
              direction === "up" ? "bottom-full mb-1" : "mt-1",
            )}
          >
            <div className="max-h-60 overflow-y-auto py-1">
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => handleSelect(option.value)}
                  className={cn(
                    "w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left",
                    "hover:bg-gray-50 transition-colors",
                    option.value === value && "bg-primary-50 text-primary",
                  )}
                >
                  {option.icon && <span>{option.icon}</span>}
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <InputError error={error} />
    </div>
  );
};

// Multi-select tag input for variants
export interface TagInputProps {
  tags: Array<{ value: string; color?: string }>;
  onTagsChange: (tags: Array<{ value: string; color?: string }>) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  className?: string;
}

export const TagInput = ({
  tags,
  onTagsChange,
  placeholder = "Ajouter...",
  label,
  error,
  className,
}: TagInputProps) => {
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue.trim()) {
      e.preventDefault();
      onTagsChange([...tags, { value: inputValue.trim() }]);
      setInputValue("");
    } else if (e.key === "Backspace" && !inputValue && tags.length > 0) {
      onTagsChange(tags.slice(0, -1));
    }
  };

  const removeTag = (index: number) => {
    onTagsChange(tags.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full">
      {label && (
        <label className="mb-2 block text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <div
        onClick={() => inputRef.current?.focus()}
        className={cn(
          "flex flex-wrap items-center gap-2",
          "px-3 py-2 min-h-[44px]",
          "bg-white border border-gray-200 rounded-lg",
          "cursor-text",
          "focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary",
          error && "border-destructive focus-within:ring-destructive/20",
          className,
        )}
      >
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 rounded-full text-sm"
          >
            {tag.color && (
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: tag.color }}
              />
            )}
            <span className="text-gray-700">{tag.value}</span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                removeTag(index);
              }}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[80px] outline-none text-sm bg-transparent"
        />
      </div>
      <InputError error={error} />
    </div>
  );
};

export default Select;
