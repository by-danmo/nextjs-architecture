import { ErrorIcon } from "@/icons/feedback/error-icon";
import Flex from "@/layouts/helpers/flex";
import { cn } from "@prettyfull/utils";

interface ErrorProps {
  error?: string;
  className?: string;
}

const Error = ({ error, className }: ErrorProps) => {
  return (
    <Flex
      as="span"
      settings={{
        align: "center",
        shouldTakeSameSpace: false,
        spacing: "gap-2",
      }}
      className={cn(
        "opacity-0 mt-2 text-[1.25rem] font-semibold text-red-500 transition-all",
        { "opacity-100": Boolean(error) },
        className
      )}
    >
      <ErrorIcon />
      <span className="mt-1">{error}</span>
    </Flex>
  );
};

export default Error;
