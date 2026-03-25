import { iconSharedStyles } from "@multi-app/lib/utils";
import type { SVGProps } from "react";

export function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={iconSharedStyles(props.className)}
    >
      <path
        d="M8 5.14v13.72a.5.5 0 0 0 .74.44l11.44-6.86a.5.5 0 0 0 0-.88L8.74 4.7a.5.5 0 0 0-.74.44z"
        fill="currentColor"
      />
    </svg>
  );
}
