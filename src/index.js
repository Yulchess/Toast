import React from "react";
import ReactDOM from "react-dom";

import { App } from "./components/App/App";
import { DesignProvider } from "./context/index";

ReactDOM.render(
  <React.StrictMode>
    <DesignProvider>
      <App />
    </DesignProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
