import { cn } from "@prettyfull/utils";
import type { HTMLAttributes, PropsWithChildren } from "react";

const Box = ({
  children,
  ...props
}: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return <div className={cn(" bg-white ", props.className)}>{children}</div>;
};

export default Box;
