import { iconSharedStyles } from "@multi-app/lib/utils";
import type { SVGProps } from "react";

export function CartIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={iconSharedStyles(props.className)}
    >
      <g fill="none">
        <circle cx={7.5} cy={18.5} r={1.5} fill="currentColor"></circle>
        <circle cx={16.5} cy={18.5} r={1.5} fill="currentColor"></circle>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 5h2l.6 3m0 0L7 15h10l2-7z"
        ></path>
      </g>
    </svg>
  );
}
