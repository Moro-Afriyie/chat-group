import React, { ReactNode, useEffect, useRef } from "react";

interface IModal {
  closeModal: (value: boolean) => void;
  children: ReactNode;
}

interface IOutsideClick {
  closeModal: (isOpen: boolean) => void;
}

const useOutsideClick = ({
  closeModal,
}: IOutsideClick): React.RefObject<HTMLDivElement> => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return modalRef;
};

const Modal: React.FC<IModal> = ({ children, closeModal }) => {
  const modalRef = useOutsideClick({ closeModal: closeModal });

  return (
    <div className="fixed top-0 left-0 right-0 w-screen h-screen z-50 overflow-x-hidden overflow-y-auto flex items-center justify-center bg-gray-700 bg-opacity-60">
      <div
        className="bg-dark max-w-[30rem] w-full mx-4 p-8 text-white rounded-2xl"
        ref={modalRef}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
