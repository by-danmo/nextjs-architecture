import { $env } from '@/config';
import type { AppRouter } from '@mono/trpc/router';
import {
    createTRPCReact,
    httpBatchLink,
    type CreateTRPCReact
} from '@trpc/react-query';

export const trpc: CreateTRPCReact<AppRouter, object> = createTRPCReact<
    AppRouter,
    object
>();

export const trpcClient = trpc.createClient({
    links: [
        httpBatchLink({
            url: $env.client.NEXT_PUBLIC_TRPC_URL
        })
    ]
});
