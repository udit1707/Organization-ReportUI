import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import OrganizationProvider from "./OrganizationContext";

ReactDOM.render(
  <React.StrictMode>
    <OrganizationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </OrganizationProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
