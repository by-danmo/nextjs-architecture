'use client';

import { cn } from '@/lib/utils/generics';
import type { ReactNode } from 'react';

interface BadgeProps {
    children: ReactNode;
    variant?: 'success' | 'warning' | 'error' | 'info' | 'neutral';
    icon?: ReactNode;
    className?: string;
}

const variantStyles = {
    success: 'bg-success-200 text-success-500',
    warning: 'bg-warning-200 text-warning-500',
    error: 'bg-error-200 text-error-500',
    info: 'bg-info-200 text-info-500',
    neutral: 'bg-white text-gray-700 shadow-sm'
};

export const Badge = ({
    children,
    variant = 'success',
    icon,
    className
}: BadgeProps) => {
    return (
        <span
            className={cn(
                'inline-flex items-center gap-1 rounded-full px-[1rem] py-[0.65rem] text-sm font-bold w-fit',
                variantStyles[variant],
                className
            )}
        >
            {icon && <span className="flex items-center">{icon}</span>}
            {children}
        </span>
    );
};
