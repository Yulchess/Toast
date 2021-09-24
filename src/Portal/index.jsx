import ReactDOM from "react-dom";
import React, { useState } from "react";
import { Modal } from "../components/Modal/modal";
import { useToastPortal } from "../Hooks";
import { Toast } from "../components/Toast/Toast";

export const ToastPortal = ({ modalActivee }) => {
  const { loaded, portalId } = useToastPortal();
  const [toasts, setToasts] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [position, setPosition] = useState("TopRight");
  let [checkValue, setCheckValue] = useState(false);

  const [autoDeleteTime, setAutoDeleteTime] = useState(2000);

  const [list, setList] = useState([]);
  return loaded
    ? ReactDOM.createPortal(
        <Toast
          toastList={list}
          position={position}
          autoDelete={checkValue}
          autoDeleteTime={autoDeleteTime}
        />,
        document.getElementById(portalId)
      )
    : null;
};
