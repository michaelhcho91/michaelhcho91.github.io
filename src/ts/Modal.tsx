import type { ReactNode } from "react";

const Modal = ({
  children,
  isVisible,
  closeModal,
}: {
  children: ReactNode;
  isVisible: boolean;
  closeModal: () => void;
}) => {
  if (isVisible) {
    return (
      <div className="modal-background" onClick={closeModal}>
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    );
  }

  return null;
};

export default Modal;
