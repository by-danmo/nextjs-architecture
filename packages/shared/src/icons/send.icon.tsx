import { iconSharedStyles } from "@multi-app/lib/utils";
import type { SVGProps } from "react";

export function SendIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={iconSharedStyles(props.className)}
    >
      <path
        d="M9.3572 14.1257C9.38253 14.1888 9.42656 14.2427 9.48339 14.28C9.54021 14.3174 9.60711 14.3365 9.6751 14.3348C9.74309 14.333 9.80892 14.3105 9.86376 14.2703C9.91859 14.23 9.95981 14.174 9.98187 14.1097L14.3152 1.443C14.3365 1.38393 14.3406 1.32 14.3269 1.2587C14.3133 1.1974 14.2824 1.14126 14.238 1.09685C14.1936 1.05244 14.1375 1.0216 14.0762 1.00793C14.0149 0.994257 13.9509 0.998329 13.8919 1.01967L1.2252 5.353C1.16087 5.37506 1.10482 5.41628 1.06458 5.47111C1.02435 5.52595 1.00185 5.59178 1.00011 5.65977C0.998368 5.72776 1.01747 5.79466 1.05484 5.85148C1.09222 5.90831 1.14608 5.95234 1.2092 5.97767L6.49587 8.09767C6.663 8.16458 6.81484 8.26464 6.94225 8.39182C7.06966 8.519 7.16999 8.67066 7.2372 8.83767L9.3572 14.1257Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
