import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./context/ErrorBoundary.jsx";
import "./index.css";
import App from "./App.jsx";
import CityContext from "./context/CityContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
    <BrowserRouter>
    <CityContext>
      <App />
    </CityContext>
    </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
);
