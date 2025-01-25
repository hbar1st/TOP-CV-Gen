import { StrictMode } from "react";

import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./components/App.jsx";

createRoot(document.getElementById("root")).render(
  // 1 means hero, 0 means villain (zero)

  <StrictMode>
    <App />
  </StrictMode>
);
