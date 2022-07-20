import React from "react";
import reactDOM from "react-dom";
import { modalProps } from "../interfaces/layout";

const Modal = ({ isVisble, children, onClose }: modalProps) => {
  if (!isVisble) return null;
  return reactDOM.createPortal(
    <>
      <div className="overly" onClick={onClose} />
      <div className="modal__main" onClick={onClose}>
        <main>{children}</main>
      </div>
    </>,
    document.getElementById("portal") as HTMLElement
  );
};

export default Modal;
