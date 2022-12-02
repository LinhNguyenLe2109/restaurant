import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <SSRProvider>
    <App />
  </SSRProvider>
);
