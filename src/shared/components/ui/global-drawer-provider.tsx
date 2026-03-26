"use client";

import { usePanelStore } from "@/shared/stores/drawer.store";
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
