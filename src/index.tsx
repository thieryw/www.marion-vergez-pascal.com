import React from 'react';
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { RouteProvider } from "./router";


createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouteProvider>
      <App />
    </RouteProvider>
  </React.StrictMode>
)