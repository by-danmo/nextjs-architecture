'use client';
import { createQueryClient } from '@/lib/react-query/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
/**
 * Ce fichier contient tout les providers qui permettent d'envelopper les composants de notre application
 * le composant ainsi obtenu peut être marqué en useClient et importer dans le app/layout qui lui reste en SSR
 */

import { trpcClient } from '@/lib/tprc/client';
import { buildProvidersTree } from '@/lib/utils/providers-tree';
import type { PropsWithChildren } from 'react';
import { Toaster } from 'sonner';
import TprcProvider from './trpc.provider';

const queryClient = createQueryClient();

const ProviderTree = buildProvidersTree([
    [TprcProvider, { client: trpcClient, queryClient }],
    [QueryClientProvider, { client: queryClient }]
]);

export const Provider = ({ children }: PropsWithChildren) => {
    return (
        <ProviderTree>
            {children}
            <Toaster position="top-center" richColors />
        </ProviderTree>
    );
};
