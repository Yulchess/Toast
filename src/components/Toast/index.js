import React, { useEffect, useState } from "react";

import {
  ModalStyles,
  ToastCloseButton,
  ToastContent,
  ToastContentBlock,
  ToastIcon,
  ToastInfo,
} from "./styles";

export const Toast = ({ toastList, position, checkValue, setList }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      if (checkValue && toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, checkValue]);

  const deleteToast = (id) => {
    setList([...toastList.filter((toast) => toast.id !== id)]);
  };

  return (
    <ModalStyles position={position}>
      {toastList.map((toast, i) => (
        <ToastContent
          key={i}
          style={{ backgroundColor: toast.backgroundColor }}
        >
          <ToastContentBlock>
            <ToastIcon src={toast.icon} />
            <ToastInfo style={{ color: toast.color }}>
              {toast.description}
            </ToastInfo>
          </ToastContentBlock>

          <ToastCloseButton
            isBlack={toast.description.includes("Warning")}
            onClick={() => deleteToast(toast.id)}
          />
        </ToastContent>
      ))}
    </ModalStyles>
  );
};
