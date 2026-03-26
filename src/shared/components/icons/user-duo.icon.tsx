import { iconSharedStyles } from '@/lib/utils/icon-shared-styles';
import type { SVGProps } from 'react';

export function ProfileIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            {...props}
            className={iconSharedStyles(props.className)}
        >
            <circle cx="12" cy="8" r="4" />
            <path d="M20 21a8 8 0 1 0-16 0" />
        </svg>
    );
}
