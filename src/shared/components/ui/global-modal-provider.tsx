"use client";

import { useModalStore } from "@/shared/stores/modal.store";
import { GlobalModal } from "./global-modal";

export const GlobalModalProvider = () => {
  const { isOpen, views, title, className, goBackModal, isOverlayCanClosed } =
    useModalStore();

  return (
    <GlobalModal
      isOpen={isOpen}
      views={views}
      title={title}
      className={className}
      isOverlayCanClosed={isOverlayCanClosed}
      onClose={goBackModal}
    />
  );
};

export default GlobalModalProvider;
