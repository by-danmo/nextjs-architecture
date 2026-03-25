import type { ReactNode } from 'react';

export interface MenuItem {
    label: string;
    icon: ReactNode;
    href: string;
    description?: string;
    isExternal?: boolean;
}

export const menuData: MenuItem[] = [
    {
        label: 'Homme',
        icon: null,
        href: '/homme',
        description: 'Collection pour hommes'
    },
    {
        label: 'Femme',
        icon: null,
        href: '/femme',
        description: 'Collection pour femmes'
    },
    {
        label: 'À Propos',
        icon: null,
        href: '/about',
        description: 'En savoir plus sur nous'
    },
    {
        label: 'Contact',
        icon: null,
        href: '/contact',
        description: 'Nous contacter'
    }
];

// Navigation data for different sections
