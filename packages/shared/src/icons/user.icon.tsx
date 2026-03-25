import { iconSharedStyles } from "@multi-app/lib/utils";
import type { SVGProps } from "react";

export function UserIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={iconSharedStyles(props.className)}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
      >
        <circle cx={12} cy={8} r={5}></circle>
        <path d="M20 21a8 8 0 0 0-16 0"></path>
      </g>
    </svg>
  );
}
