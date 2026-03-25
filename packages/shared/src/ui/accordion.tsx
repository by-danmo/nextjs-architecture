"use client";
import { cn } from "@multi-app/lib/utils/generics";
import type { ReactNode, SVGProps } from "react";
import { createContext, useContext, useState } from "react";

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke="currentColor"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
);

// Context pour partager l'état entre AccordionItem et ses enfants
interface AccordionItemContextValue {
  isOpen: boolean;
  toggle: () => void;
}

const AccordionItemContext = createContext<AccordionItemContextValue | null>(
  null,
);

const useAccordionItem = () => {
  const context = useContext(AccordionItemContext);
  if (!context) {
    throw new Error("Accordion components must be used within AccordionItem");
  }
  return context;
};

// Composant principal Accordion (wrapper)
interface AccordionProps {
  children: ReactNode;
  className?: string;
}

const Accordion = ({ children, className }: AccordionProps) => {
  return (
    <div
      className={cn(
        "[&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-gray-300",
        className,
      )}
    >
      {children}
    </div>
  );
};

// Composant AccordionItem
interface AccordionItemProps {
  children: ReactNode;
  defaultOpen?: boolean;
  className?: string;
}

const AccordionItem = ({
  children,
  defaultOpen = false,
  className,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <AccordionItemContext.Provider value={{ isOpen, toggle }}>
      <div className={cn("py-8 md:py-12 lg:py-[3.2rem]", className)}>
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

// Composant AccordionTrigger (header cliquable)
interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
  showIcon?: boolean;
  iconClassName?: string;
}

const AccordionTrigger = ({
  children,
  className,
  showIcon = true,
  iconClassName,
}: AccordionTriggerProps) => {
  const { isOpen, toggle } = useAccordionItem();

  return (
    <button
      onClick={toggle}
      className={cn(
        "w-full flex items-center justify-between gap-4 text-left group hover:text-primary transition-colors",
        className,
      )}
    >
      {children}
      {showIcon && (
        <ChevronDownIcon
          className={cn(
            "size-6 md:size-8 transition-all duration-300 flex-shrink-0 group-hover:text-primary",
            isOpen && "rotate-180",
            iconClassName,
          )}
        />
      )}
    </button>
  );
};

// Composant AccordionContent (contenu collapsible)
interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent = ({ children, className }: AccordionContentProps) => {
  const { isOpen } = useAccordionItem();

  return (
    <div
      className={cn(
        "grid transition-all duration-300 ease-in-out",
        isOpen
          ? "grid-rows-[1fr] opacity-100 mt-8 md:mt-10 lg:mt-12"
          : "grid-rows-[0fr] opacity-0",
        className,
      )}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
};

// Exporter tous les composants
Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export { Accordion };
export type {
  AccordionContentProps,
  AccordionItemProps,
  AccordionProps,
  AccordionTriggerProps,
};
