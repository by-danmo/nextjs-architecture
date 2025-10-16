'use client';
import { createQueryClient } from '@/lib/react-query/react-query';
/**
 * Ce fichier contient tout les providers qui permettent d'envelopper les composants de notre application
 * le composant ainsi obtenu peut être marqué en useClient et importer dans le app/layout qui lui reste en SSR
 */

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
            {children}
            <Toaster position="top-center" richColors />
        </ProviderTree>
    );
};
