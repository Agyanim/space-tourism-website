import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import MyProvider from "./context/SelectorProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <MyProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </MyProvider> */}
  </React.StrictMode>
);
