import React, { useState, useEffect } from "react";

import {
  ModalStyles,
  ToastContent,
  ToastInfo,
  ToastCloseButton,
  ToastIcon,
  ToastContentBlock,
} from "./styles";

export const Toast = ({ toastList, position, checkValue, isWarning }) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (checkValue && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, checkValue, list]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  return (
    <ModalStyles position={position}>
      {list.map((toast, i) => (
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
