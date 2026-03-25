import { iconSharedStyles } from "@multi-app/lib/utils";
import type { SVGProps } from "react";

const LikeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={iconSharedStyles(props.className)}
    >
      <g clipPath="url(#clip0_2415_558)">
        <path
          d="M4.08398 5.83337V12.8334"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.74935 3.42996L8.16602 5.83329H11.5668C11.748 5.83329 11.9266 5.87546 12.0886 5.95646C12.2506 6.03746 12.3915 6.15506 12.5002 6.29996C12.6089 6.44486 12.6823 6.61306 12.7147 6.79126C12.7471 6.96946 12.7376 7.15275 12.6868 7.32663L11.3277 11.9933C11.257 12.2356 11.1096 12.4485 10.9077 12.6C10.7057 12.7514 10.4601 12.8333 10.2077 12.8333H2.33268C2.02326 12.8333 1.72652 12.7104 1.50772 12.4916C1.28893 12.2728 1.16602 11.976 1.16602 11.6666V6.99996C1.16602 6.69054 1.28893 6.39379 1.50772 6.175C1.72652 5.95621 2.02326 5.83329 2.33268 5.83329H3.94268C4.15973 5.83318 4.37244 5.77252 4.55691 5.65813C4.74137 5.54374 4.89026 5.38017 4.98685 5.18579L6.99935 1.16663C7.27444 1.17003 7.5452 1.23556 7.7914 1.35831C8.03761 1.48106 8.25289 1.65786 8.42117 1.87549C8.58945 2.09313 8.70637 2.34599 8.7632 2.61516C8.82002 2.88433 8.81529 3.16287 8.74935 3.42996Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2415_558">
          <rect width="14" height="14" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LikeIcon;
