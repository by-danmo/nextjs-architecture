// Supports weights 100-900
import '@fontsource-variable/urbanist';
import '@fontsource/dm-serif-display';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/config';
import { Provider } from '@/providers/root.provider';
import '@mono/ui/styles.css';
import './globals.css';

export const metadata: Metadata = siteConfig.meta;

export default function RootLayout({
    children
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <main>
                    <Provider>{children}</Provider>
                </main>
            </body>
        </html>
    );
}
