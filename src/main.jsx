import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
createRoot(document.getElementById("root")).render(<App />);