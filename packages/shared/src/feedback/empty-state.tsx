import { cn } from "@multi-app/lib/utils/generics";
import type { ReactNode } from "react";
import Title from "../ui/title";

interface EmptyStateProps {
  title: string;
  description: string;
  actions?: ReactNode;
  className?: string;
}

export function EmptyState({
  title,
  description,
  actions,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("text-left space-y-5 py-16", className)}>
      <div>
        <Title as="h3" className="mb-2">
          {title}
        </Title>
        <p className="text-gray-500 text-sm max-w-md">{description}</p>
      </div>
      {actions && <div className="flex gap-3">{actions}</div>}
    </div>
  );
}

export default EmptyState;
