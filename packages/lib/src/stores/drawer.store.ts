import type { ReactNode } from 'react';
import { create } from 'zustand';

type OpenPanelProps = {
    title?: string;
    view: ReactNode;
    isOverlayCanClosed?: boolean;
    className?: string;
    direction?: 'left' | 'right' | 'bottom' | 'top';
    button?: ReactNode;
};

export interface PanelSlice {
    title: string;
    isOpen: boolean;
    view: ReactNode;
    className?: string;
    direction?: 'left' | 'right' | 'bottom' | 'top';
    isOverlayCanClosed: boolean;
    button?: ReactNode;
    openPanel: (data: OpenPanelProps) => void;
    closePanel: () => void;
}

export const usePanelStore = create<PanelSlice>((set) => ({
    isOpen: false,
    view: null,
    isOverlayCanClosed: true,
    title: '',
    className: '',
    direction: 'right',
    button: null,
    openPanel: ({ view, isOverlayCanClosed, title, className, button, direction }) =>
        set({
            isOpen: true,
            view,
            isOverlayCanClosed,
            title,
            className,
            direction: direction ?? 'right',
            button: button ?? null
        }),
    closePanel: () =>
        set({ isOpen: false, view: null, title: '', className: '' })
}));
