import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

if (typeof window !== "undefined" && typeof document !== "undefined") {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

  const setBodyTheme = (matches: boolean) => {
    document.body.classList.toggle("dark", matches);
  };

  setBodyTheme(prefersDark.matches);

  const handleSchemeChange = function (event: MediaQueryListEvent) {
    setBodyTheme(event.matches);
  };

  if (typeof prefersDark.addEventListener === "function") {
    prefersDark.addEventListener("change", handleSchemeChange);
  } else if (typeof prefersDark.addListener === "function") {
    prefersDark.addListener(handleSchemeChange);
  }
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
