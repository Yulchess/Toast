import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";

import { Toast } from "../components/Toast";

export const ToastPortal = ({
  toastList,
  position,
  checkValue,
  autoDeleteTime,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`${Date.now()}`);

  useEffect(() => {
    const div = document.createElement("div");
    div.id = portalId;
    document.getElementsByTagName("body")[0].prepend(div);

    setLoaded(true);

    return () => document.getElementsByTagName("body")[0].removeChild(div);
  }, [portalId]);

  console.log(toastList, position, checkValue, autoDeleteTime);
  return loaded
    ? ReactDOM.createPortal(
        <div>
          <Toast
            toastList={toastList}
            position={position}
            autoDelete={checkValue}
            autoDeleteTime={autoDeleteTime}
          />
        </div>,
        document.getElementById(portalId)
      )
    : null;
};
