'use client';
import { createQueryClient } from '@/lib/react-query/react-query';
/**
 * Root Provider — Application-wide providers wrapper
 * ====================================================
 *
 * PATTERN: Provider Composition via buildProvidersTree
 * This utility avoids deeply nested JSX ("Provider Hell"):
 *
 *   BAD:
 *   <QueryClient><Theme><Auth><Toast>{children}</Toast></Auth></Theme></QueryClient>
 *
 *   GOOD:
 *   const Tree = buildProvidersTree([[QueryClient, props], [Theme, props]])
 *   <Tree>{children}</Tree>
 *
 * PATTERN: Client Boundary at the Provider Level
 * This file is marked 'use client'. It's imported in the root layout.tsx
 * (a Server Component). This is the recommended boundary: providers need
 * client-side state, but the layout itself stays on the server.
 */

import { DevToolsProvider } from '@/shared/devtools';
import { buildProvidersTree } from '@/lib/utils/providers-tree';
import { QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';

const ProviderTree = buildProvidersTree([
    [QueryClientProvider, { client: createQueryClient() }]
]);

export const Provider = ({ children }: PropsWithChildren) => {
    return (
        <ProviderTree>
            {/**
             * DevToolsProvider renders the floating DevTools panel.
             * It only mounts in development — tree-shaken in production.
             */}
            <DevToolsProvider>
                {children}
            </DevToolsProvider>
            <Toaster position="top-center" richColors />
        </ProviderTree>
    );
};
