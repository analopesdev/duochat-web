import React from "react";
import ReactDOM from "react-dom/client";
import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/toast";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./pages/routes/AppRouter";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HeroUIProvider>
      <ToastProvider placement="bottom-center" />
      <main className="dark text-foreground bg-background bg-zinc-900 h-screen">
        <RouterProvider router={router} />
      </main>
    </HeroUIProvider>
  </React.StrictMode>
);
