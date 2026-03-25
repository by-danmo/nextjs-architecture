"use client";

import { usePanelStore } from "@multi-app/lib/stores/drawer.store";
import { GlobalDrawer } from "./global-drawer";

export const GlobalDrawerProvider = () => {
  const { isOpen, view, title, className, closePanel, direction } =
    usePanelStore();

  return (
    <GlobalDrawer
      isOpen={isOpen}
      view={view}
      title={title}
      className={className}
      direction={direction}
      onClose={closePanel}
      dismissible={false}
    />
  );
};

export default GlobalDrawerProvider;
