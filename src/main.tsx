import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./App.tsx";
import "./index.css";

if (typeof window === "undefined") {
  throw new Error("window object not found");
}

// eslint-disable-next-line ssr-friendly/no-dom-globals-in-module-scope
const root = document.getElementById("root");

if (!root) {
  throw new Error("root element not found");
}

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
);
