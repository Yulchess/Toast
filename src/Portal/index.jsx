import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { Toast } from "../components/Toast";

export const ToastPortal = ({ toastList, position, checkValue }) => {
  const [loaded, setLoaded] = useState(false);
  const [portalId] = useState(`${Date.now()}`);

  useEffect(() => {
    const div = document.createElement("div");
    div.id = portalId;
    document.getElementsByTagName("body")[0].prepend(div);

    setLoaded(true);

    return () => document.getElementsByTagName("body")[0].removeChild(div);
  }, [portalId]);

  return loaded
    ? ReactDOM.createPortal(
        <Toast
          toastList={toastList}
          position={position}
          checkValue={checkValue}
        />,
        document.getElementById(portalId)
      )
    : null;
};
