/**
 * Toast utility - migrated from shared/utils/toastify.ts
 * Enhanced with better TypeScript support and more options
 */

import type { ExternalToast } from 'sonner';
import { toast } from 'sonner';

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'loading';

interface ToastOptions extends ExternalToast {
    duration?: number;
    position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
}

const $toastify = (type: ToastType, message?: string[] | string, options: ToastOptions = { duration: 3000 }) => {
    let messages = '';

    if (Array.isArray(message)) {
        messages = message.join('\n');
    } else {
        messages = message || '';
    }

    toast[type](messages, options);
};

// Convenience methods
export const toastSuccess = (message: string, options?: ToastOptions) => {
    $toastify('success', message, options);
};

export const toastError = (message: string, options?: ToastOptions) => {
    $toastify('error', message, options);
};

export const toastInfo = (message: string, options?: ToastOptions) => {
    $toastify('info', message, options);
};

export const toastWarning = (message: string, options?: ToastOptions) => {
    $toastify('warning', message, options);
};

export const toastLoading = (message: string, options?: ToastOptions) => {
    $toastify('loading', message, options);
};
