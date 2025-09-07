import React from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ToastProvider placement="bottom-center" />
      <main className="dark text-foreground bg-background bg-zinc-900">
        <App />
      </main>
    </HeroUIProvider>
  </React.StrictMode>
);
