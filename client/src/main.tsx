import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./output.css"
import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { AppRoutes } from "./routes/index.tsx";

export function Main() {
  const navigate = useNavigate();

  return (
    <>
      <NextUIProvider navigate={navigate} className="h-full dark">
        <AppRoutes />
      </NextUIProvider>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </React.StrictMode>
);
