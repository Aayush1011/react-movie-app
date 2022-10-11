import React from "react";
import createRoot from "react-dom";
import App from "./App";
import UserProvider from "./context";

createRoot.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
