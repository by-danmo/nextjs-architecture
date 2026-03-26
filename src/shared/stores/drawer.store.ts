import { create } from 'zustand';

interface PanelState {
    isOpen: boolean;
    view?: React.ReactNode;
    title?: string;
    className?: string;
    direction?: 'left' | 'right' | 'bottom' | 'top';
    openPanel: (options: Omit<PanelState, 'isOpen' | 'openPanel' | 'closePanel'>) => void;
    closePanel: () => void;
}

export const usePanelStore = create<PanelState>()((set) => ({
    isOpen: false,
    view: undefined,
    title: undefined,
    className: undefined,
    direction: 'right',
    openPanel: (options) => set({ isOpen: true, ...options }),
    closePanel: () => set({ isOpen: false, view: undefined, title: undefined }),
}));
