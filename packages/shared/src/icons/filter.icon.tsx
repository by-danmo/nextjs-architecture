import { iconSharedStyles } from "@multi-app/lib/utils";
import type { SVGProps } from "react";

export function FilterIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
      className={iconSharedStyles(props.className)}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M4.5 7h15M7 12h10m-7 5h4"
      ></path>
    </svg>
  );
}
