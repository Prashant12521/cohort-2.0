import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StudentsContext from "./context/StudentsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StudentsContext>
  </StudentsContext>
);
