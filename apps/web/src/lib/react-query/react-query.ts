import type { DefaultOptions } from '@tanstack/react-query';
import { QueryClient } from '@tanstack/react-query';

export const queryConfig = {
    queries: {
        // throwOnError: true,
        refetchOnWindowFocus: false,
        retry: 0
        // refetchOnReconnect: true
    },
    mutations: {
        retry: 0
    }
} satisfies DefaultOptions;

export const createQueryClient = () => {
    return new QueryClient({
        defaultOptions: queryConfig
    });
};
