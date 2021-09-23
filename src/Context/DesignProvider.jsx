import React, { createContext, useState } from "react";
import {
  theme,
  errorNotification,
  infoNotification,
  warningNotification,
  successNotification,
} from "../theme";

export const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  const [selectToastTheme, setselectToastTheme] = useState(infoNotification);

  const changeNotification = (value) => {
    switch (value) {
      case "info":
        setselectToastTheme(infoNotification);
        break;
      case "warning":
        setselectToastTheme(warningNotification);
        break;
      case "error":
        setselectToastTheme(errorNotification);
        break;
      case "success":
        setselectToastTheme(successNotification);
        break;
      default:
        break;
    }
  };

  return (
    <DesignContext.Provider
      value={{ theme: selectToastTheme, changeNotification }}
    >
      {children}
    </DesignContext.Provider>
  );
};
