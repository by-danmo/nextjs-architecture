import type { ReactNode } from 'react';
import { create } from 'zustand';

type OpenModalProps = {
    title?: string;
    view: ReactNode;
    isOverlayCanClosed?: boolean;
    className?: string;
};

export interface ModalSlice {
    title: string;
    isOpen: boolean;
    views: ReactNode[];
    className?: string;
    isOverlayCanClosed: boolean;

    openModal: (data: OpenModalProps) => void;
    closeModal: () => void;
    goBackModal: () => void;
}

export const useModalStore = create<ModalSlice>((set) => ({
    isOpen: false,
    views: [],
    isOverlayCanClosed: true,
    title: '',
    className: '',

    openModal: ({ view, isOverlayCanClosed, title, className }) =>
        set((state: ModalSlice) => ({
            isOpen: true,
            views: [...state.views, view],
            isOverlayCanClosed: isOverlayCanClosed ?? true,
            title: title ?? '',
            className: className ?? ''
        })),

    closeModal: () =>
        set(() => ({
            isOpen: false,
            views: [],
            title: '',
            className: ''
        })),

    goBackModal: () =>
        set((state: ModalSlice) => {
            const newViews = [...state.views];
            void newViews.pop();
            return {
                isOpen: newViews.length > 0,
                views: newViews
            };
        })
}));
