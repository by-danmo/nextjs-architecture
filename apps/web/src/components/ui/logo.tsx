import { siteConfig } from '@/config';
import Link from 'next/link';
import type { HTMLAttributes } from 'react';

interface LogoProps extends HTMLAttributes<HTMLElement> {
    width?: number;
    height?: number;
    variant?: 'text' | 'image';
    href?: string;
}

const Logo = ({
    width,
    height,
    variant = 'text',
    href = '/',
    className,
    ...props
}: LogoProps) => {
    const logoContent =
        variant === 'image' ? (
            siteConfig.logo?.default ? (
                <img
                    src={siteConfig.logo.default}
                    alt={siteConfig.meta.title}
                    width={width}
                    height={height}
                    className={className}
                />
            ) : null
        ) : (
            <h2 style={{ width, height }} className={className} {...props}>
                <Link
                    href={href}
                    className="text-[2.4rem] sm:text-[3.5rem] font-semibold hover:opacity-80 transition-opacity"
                >
                    {siteConfig.meta.title}
                </Link>
            </h2>
        );

    return logoContent;
};

export { Logo };
export type { LogoProps };
