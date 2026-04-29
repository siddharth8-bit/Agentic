import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Simulation from "./pages/Simulation";
import About from "./pages/About";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);