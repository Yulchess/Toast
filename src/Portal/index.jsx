import ReactDOM from "react-dom";
import React, { useEffect, useState } from "react";

import { Toast } from "../components/Toast";

export const ToastPortal = ({ toastList, position, checkValue, isWarning }) => {
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
        <div>
          <Toast
            toastList={toastList}
            position={position}
            checkValue={checkValue}
            isWarning={isWarning}
          />
        </div>,
        document.getElementById(portalId)
      )
    : null;
};
