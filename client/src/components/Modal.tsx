import React, { ReactNode, useEffect, useRef } from "react";

interface IModal {
  closeModal: (value: boolean) => void;
  children: ReactNode;
}

const Modal: React.FC<IModal> = ({ children, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 right-0 w-screen h-screen z-50 overflow-x-hidden overflow-y-auto flex items-center justify-center bg-gray-700 bg-opacity-60">
      <div className="bg-dark w-9/12 md:w-1/3 p-8 text-white rounded-2xl">
        {children}
      </div>
    </div>
  );
};

export default Modal;
