import { cn } from "@multi-app/lib/utils/generics";
import { Button } from "../ui";

interface ContactSectionProps {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick?: () => void;
  buttonHref?: string;
  className?: string;
}

export const ContactSection = ({
  title,
  description,
  buttonText,
  onButtonClick,
  buttonHref,
  className,
}: ContactSectionProps) => {
  return (
    <div className={cn("text-center max-w-[70rem] mx-auto", className)}>
      <h3 className="mb-[2rem]">{title}</h3>
      <p className="text-base md:text-lg text-gray-600 mb-[3rem]">
        {description}
      </p>
      {buttonHref ? (
        <a href={buttonHref}>
          <Button variant="default" className="w-auto">
            {buttonText}
          </Button>
        </a>
      ) : (
        <Button variant="default" className="w-auto" onClick={onButtonClick}>
          {buttonText}
        </Button>
      )}
    </div>
  );
};
