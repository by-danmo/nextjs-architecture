import { cn } from "@prettyfull/utils";
import { MouseEventHandler } from "react";

const GridBar = ({
  number,
  onclick,
  className,
}: {
  number: number;
  className?: string;
  onclick: MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      onClick={onclick}
      className={cn(
        "flex justify-center text-black gap-[0.2rem] items-center cursor-pointer",
        className
      )}
    >
      {Array.from({ length: number }).map((_, i) => (
        <span key={i} className="w-2 h-8 bg-gray-300" />
      ))}
    </button>
  );
};

export default GridBar;
