/**
 * UI Store - migrated from shared/store/useUIStore.ts
 * Enhanced with better TypeScript support and more features
 */

import { create } from 'zustand';
import { createJSONStorage, devtools, persist } from 'zustand/middleware';
import { useShallow } from 'zustand/react/shallow';

interface UIState {
    // Sidebar management
    isSidebarCollapsed: boolean;
    toggleSidebar: () => void;
    setSidebarCollapsed: (collapsed: boolean) => void;

    // Loading states
    isLoading: boolean;
    setLoading: (loading: boolean) => void;

    // Modal management
    modals: Record<string, boolean>;
    openModal: (modalId: string) => void;
    closeModal: (modalId: string) => void;
    toggleModal: (modalId: string) => void;
    closeAllModals: () => void;

    // Notification management
    notifications: Array<{
        id: string;
        type: 'success' | 'error' | 'warning' | 'info';
        message: string;
        timestamp: number;
    }>;
    addNotification: (
        notification: Omit<UIState['notifications'][0], 'id' | 'timestamp'>
    ) => void;
    removeNotification: (id: string) => void;
    clearNotifications: () => void;
}

const createUISlice = (set: any): UIState => ({
    // Sidebar
    isSidebarCollapsed: false,
    toggleSidebar: () =>
        set((state: UIState) => ({
            isSidebarCollapsed: !state.isSidebarCollapsed
        })),
    setSidebarCollapsed: (collapsed: boolean) =>
        set({ isSidebarCollapsed: collapsed }),

    // Loading
    isLoading: false,
    setLoading: (loading: boolean) => set({ isLoading: loading }),

    // Modals
    modals: {},
    openModal: (modalId: string) =>
        set((state: UIState) => ({
            modals: { ...state.modals, [modalId]: true }
        })),
    closeModal: (modalId: string) =>
        set((state: UIState) => ({
            modals: { ...state.modals, [modalId]: false }
        })),
    toggleModal: (modalId: string) =>
        set((state: UIState) => ({
            modals: { ...state.modals, [modalId]: !state.modals[modalId] }
        })),
    closeAllModals: () => set({ modals: {} }),

    // Notifications
    notifications: [],
    addNotification: (notification) =>
        set((state: UIState) => ({
            notifications: [
                ...state.notifications,
                {
                    ...notification,
                    id: Math.random().toString(36).substr(2, 9),
                    timestamp: Date.now()
                }
            ]
        })),
    removeNotification: (id: string) =>
        set((state: UIState) => ({
            notifications: state.notifications.filter((n) => n.id !== id)
        })),
    clearNotifications: () => set({ notifications: [] })
});

export const useUIStore = create<UIState>()(
    devtools(
        persist((set) => createUISlice(set), {
            name: 'ui-storage',
            storage: createJSONStorage(() => localStorage),
            partialize: (state) => ({
                isSidebarCollapsed: state.isSidebarCollapsed
                // Don't persist notifications, modals, or loading states
            })
        }),
        { name: 'ui-store' }
    )
);

/**
 * PATTERN: useShallow for Object-Returning Selectors
 * Without useShallow, returning `{ a: s.a, b: s.b }` creates a new
 * object reference on every store update → component re-renders even
 * when a and b haven't changed. useShallow does property-level comparison.
 */
export const useSidebar = () =>
    useUIStore(useShallow((state) => ({
        isCollapsed: state.isSidebarCollapsed,
        toggle: state.toggleSidebar,
        setCollapsed: state.setSidebarCollapsed
    })));
export const useModals = () =>
    useUIStore(useShallow((state) => ({
        modals: state.modals,
        openModal: state.openModal,
        closeModal: state.closeModal,
        toggleModal: state.toggleModal,
        closeAllModals: state.closeAllModals
    })));
export const useNotifications = () =>
    useUIStore(useShallow((state) => ({
        notifications: state.notifications,
        addNotification: state.addNotification,
        removeNotification: state.removeNotification,
        clearNotifications: state.clearNotifications
    })));
