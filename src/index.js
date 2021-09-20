import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App } from "./components/App/App";
import { DesignProvider } from "./Context/DesignProvider";
import {theme }from "./theme";


ReactDOM.render(
  <React.StrictMode>
    <DesignProvider>
      <App />
    </DesignProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
