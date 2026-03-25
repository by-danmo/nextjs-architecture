import { iconSharedStyles } from "@multi-app/lib/utils";
import type { SVGProps } from "react";

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className={iconSharedStyles(props.className)}
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="m10.687 6.48l-.65-1.164c-.884-1.585-3.106-1.772-4.5-.379c-.836.837-1.487 1.863-1.53 2.996c-.056 1.47.217 3.728 1.83 6.173l4.278-4.278c.922-.923 1.157-2.3.572-3.349m3.485 7.405l-4.278 4.279c2.445 1.612 4.704 1.885 6.173 1.83c1.133-.043 2.159-.695 2.996-1.532c1.393-1.393 1.206-3.615-.38-4.5l-1.162-.649c-1.05-.585-2.426-.35-3.349.572"
        clipRule="evenodd"
      ></path>
      <path
        fill="currentColor"
        d="M11.025 12.976c-2.03-2.029-.91-3.148-.91-3.148l-4.279 4.278c.482.731 1.084 1.479 1.832 2.227s1.495 1.349 2.226 1.83l4.278-4.277s-1.119 1.119-3.148-.91"
        opacity={0.5}
      ></path>
    </svg>
  );
}

export function EmailIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      {...props}
      className={iconSharedStyles(props.className)}
    >
      <g fill="none">
        <path
          fill="currentColor"
          d="m3 5l7.586 7.586a2 2 0 0 0 2.828 0L21 5v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
          opacity={0.16}
        ></path>
        <path
          fill="currentColor"
          d="M3 5V4a1 1 0 0 0-1 1zm18 0h1a1 1 0 0 0-1-1zM3 6h18V4H3zm17-1v12h2V5zm-1 13H5v2h14zM4 17V5H2v12zm1 1a1 1 0 0 1-1-1H2a3 3 0 0 0 3 3zm15-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3z"
        ></path>
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="m3 5l9 9l9-9"
        ></path>
      </g>
    </svg>
  );
}
