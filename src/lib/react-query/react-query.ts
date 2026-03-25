import type { DefaultOptions } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

export const queryConfig = {
    queries: {
        // throwOnError: true,
        refetchOnWindowFocus: false,
        retry: (failureCount: number, error: any) => {
            // Don't retry on 4xx errors (client errors)
            if (error?.status >= 400 && error?.status < 500) {
                return false;
            }
            // Retry up to 3 times for other errors
            return failureCount < 3;
        },
        staleTime: 1000 * 60 * 5 // 5 minutes
        // gcTime: 1000 * 60 * 10, // 10 minutes
        // refetchOnMount: true,
        // refetchOnReconnect: true
    },
    mutations: {
        retry: false
    }
} satisfies DefaultOptions;

export const createQueryClient = () => {
    return new QueryClient({
        defaultOptions: queryConfig
    });
};
