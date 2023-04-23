import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter basename="/test-task-goit">
      <App />
    </HashRouter>
  </React.StrictMode>
);
