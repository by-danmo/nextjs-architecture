import { iconSharedStyles } from "@multi-app/lib/utils";
import type { SVGProps } from "react";

const DislikeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={iconSharedStyles(props.className)}
    >
      <g clipPath="url(#clip0_2415_562)">
        <path
          d="M9.91602 8.16663V1.16663"
          stroke="#currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M5.24979 10.57L5.83312 8.16663H2.43229C2.25117 8.16663 2.07254 8.12446 1.91054 8.04346C1.74854 7.96246 1.60763 7.84485 1.49896 7.69996C1.39029 7.55506 1.31684 7.38686 1.28444 7.20866C1.25204 7.03046 1.26158 6.84717 1.31229 6.67329L2.67146 2.00663C2.74214 1.76429 2.88951 1.55142 3.09146 1.39996C3.2934 1.2485 3.53903 1.16663 3.79146 1.16663H11.6665C11.9759 1.16663 12.2726 1.28954 12.4914 1.50833C12.7102 1.72713 12.8331 2.02387 12.8331 2.33329V6.99996C12.8331 7.30938 12.7102 7.60612 12.4914 7.82492C12.2726 8.04371 11.9759 8.16663 11.6665 8.16663H10.0565C9.83941 8.16674 9.6267 8.2274 9.44223 8.34179C9.25777 8.45618 9.10888 8.61975 9.01229 8.81413L6.99979 12.8333C6.7247 12.8299 6.45394 12.7644 6.20774 12.6416C5.96153 12.5189 5.74625 12.3421 5.57797 12.1244C5.40969 11.9068 5.29277 11.6539 5.23594 11.3848C5.17912 11.1156 5.18385 10.837 5.24979 10.57Z"
          stroke="#currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2415_562">
          <rect width="14" height="14" fill="currentColor" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DislikeIcon;
