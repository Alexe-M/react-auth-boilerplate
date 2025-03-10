import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import APIManager from "./services/APIManager.js";

// Permet d'utiliser APIManager directement dans la console du navigateur
window.APIManager = APIManager;

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);




