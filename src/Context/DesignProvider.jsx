import React, { createContext } from "react";

import { theme } from "../theme";

export const DesignContext = createContext();

export const DesignProvider = ({ children }) => {
  return (
    <DesignContext.Provider value={{ theme }}>
      {children}
    </DesignContext.Provider>
  );
};
