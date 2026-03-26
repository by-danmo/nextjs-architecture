import { create } from 'zustand';
import type * as React from 'react';

interface ModalState {
    isOpen: boolean;
    views: React.ReactNode[];
    title?: string;
    className?: string;
    isOverlayCanClosed: boolean;
    openModal: (options: { view: React.ReactNode; title?: string; className?: string; isOverlayCanClosed?: boolean }) => void;
    closeModal: () => void;
    goBackModal: () => void;
}

export const useModalStore = create<ModalState>()((set) => ({
    isOpen: false,
    views: [],
    title: undefined,
    className: undefined,
    isOverlayCanClosed: true,
    openModal: ({ view, title, className, isOverlayCanClosed = true }) =>
        set((state) => ({
            isOpen: true,
            views: [...state.views, view],
            title,
            className,
            isOverlayCanClosed,
        })),
    closeModal: () => set({ isOpen: false, views: [], title: undefined }),
    goBackModal: () =>
        set((state) => {
            const views = state.views.slice(0, -1);
            return { views, isOpen: views.length > 0 };
        }),
}));
