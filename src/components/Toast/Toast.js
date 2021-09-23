import React, { useState, useEffect } from "react";

import { ModalStyles, ToastComp, ToastInfo, ToastCloseButton } from "./styles";

export const Toast = ({ toastList, position, autoDelete, dismissTime }) => {
  const [list, setList] = useState(toastList);

  useEffect(() => {
    setList([...toastList]);
  }, [toastList]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id);
      }
    }, dismissTime);

    return () => {
      clearInterval(interval);
    };

    // eslint-disable-next-line
  }, [toastList, autoDelete, dismissTime, list]);

  const deleteToast = (id) => {
    const listItemIndex = list.findIndex((e) => e.id === id);
    const toastListItem = toastList.findIndex((e) => e.id === id);
    list.splice(listItemIndex, 1);
    toastList.splice(toastListItem, 1);
    setList([...list]);
  };

  console.log(position);
  return (
    <ModalStyles position={position}>
      {list.map((toast, i) => (
        <ToastComp key={i} style={{ backgroundColor: toast.backgroundColor }}>
          <ToastInfo style={{ color: toast.color }}>
            {toast.description}
          </ToastInfo>

          <ToastCloseButton onClick={() => deleteToast(toast.id)} />
        </ToastComp>
      ))}
    </ModalStyles>
  );
};
