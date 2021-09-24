import React, { useState, useEffect } from "react";

import { ModalStyles, ToastComp, ToastInfo, ToastCloseButton } from "./styles";

export const Toast = ({ toastList, position, autoDelete, autoDeleteTime }) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, autoDeleteTime);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, autoDelete, autoDeleteTime, list]);

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
        <ToastComp key={i} style={{ backgroundColor: toast.backgroundColor }}>
          <ToastInfo style={{ color: toast.color }}>
            {toast.description}
          </ToastInfo>
          <img src={toast.icon} alt="" />
          <ToastCloseButton onClick={() => deleteToast(toast.id)} />
        </ToastComp>
      ))}
    </ModalStyles>
  );
};
