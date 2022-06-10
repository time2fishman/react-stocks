import React from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
import App from "./App.js";
// Bring in Browser Router component, aliased as Router, from react router dom package
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Wrap App component in Router component */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
