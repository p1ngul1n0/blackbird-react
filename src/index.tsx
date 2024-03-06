import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import "@/index.css";
import { ThemeProvider } from "@/context/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <ThemeProvider defaultTheme="light" storageKey="ui-theme">
    <App />
  </ThemeProvider>,
);
