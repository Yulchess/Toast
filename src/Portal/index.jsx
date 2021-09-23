import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Modal } from "../components/Modal/modal";
import { useToastPortal } from "../Hooks";
import { Toast } from "../components/Toast/Toast";

export const ToastPortal = ({ modalActivee }) => {
  const { loaded, portalId } = useToastPortal();
  const [toasts, setToasts] = useState([]);
  const [modalActive, setModalActive] = useState(false);

  console.log(modalActivee);

  return loaded
    ? ReactDOM.createPortal(
        <div>
          {/* <Modal active={modalActivee} setActive={setModalActive}></Modal> */}
          {/* <ToastPortal></ToastPortal> */}
        </div>,
        document.getElementById(portalId)
      )
    : null;
};
