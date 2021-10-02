import React, { useEffect } from "react";

import { TOAST_POSITIONS } from "@/constants/toastPositions";

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
        handleDeleteToast(toastList[0].id)();
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, checkValue]);

  const handleDeleteToast = (id) => () => {
    setList([...toastList.filter((toast) => toast.id !== id)]);
  };

  return (
    <ModalStyles position={position} toastPosition={TOAST_POSITIONS}>
      {toastList.map((toast) => (
        <ToastContent key={toast.id} backgroundColor={toast.backgroundColor}>
          <ToastContentBlock>
            <toast.icon />
            <ToastInfo toastColor={toast.color}>{toast.description}</ToastInfo>
          </ToastContentBlock>

          <ToastCloseButton
            isBlack={toast.description.includes("Warning")}
            onClick={handleDeleteToast(toast.id)}
          />
        </ToastContent>
      ))}
    </ModalStyles>
  );
};
