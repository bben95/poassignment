import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DataContextProvider } from "./context/DataContext";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // routing
  <Router>
    {/* context */}
    <DataContextProvider>
      <App />
    </DataContextProvider>
  </Router>
);
