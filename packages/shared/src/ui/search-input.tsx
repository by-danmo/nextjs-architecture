import { cn } from "@multi-app/lib/utils/generics";
import { Search } from "lucide-react";
import type { InputHTMLAttributes } from "react";

export interface SearchInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  containerClassName?: string;
  iconClassName?: string;
}

export const SearchInput = ({
  className,
  containerClassName,
  iconClassName,
  ...props
}: SearchInputProps) => {
  return (
    <div className={cn("relative", containerClassName)}>
      <Search
        className={cn(
          "absolute left-3.5 top-1/2 -translate-y-1/2 size-5 text-gray-400",
          iconClassName,
        )}
      />
      <input
        type="text"
        {...props}
        className={cn(
          "w-full py-2.5 pl-10 pr-4",
          "border border-gray-200 rounded-xl",
          "text-sm font-normal text-gray-900 placeholder:text-gray-400",
          "focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary",
          "transition-all",
          className,
        )}
      />
    </div>
  );
};
