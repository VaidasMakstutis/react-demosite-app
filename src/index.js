import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from "../src/Pages/ServicePage";
import WorksPage from "../src/Pages/WorksPage";
import AboutPage from "../src/Pages/AboutPage";
import ContactPage from "../src/Pages/ContactPage";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Routes>
        <Route path="/" element={<App /> }/>
        <Route path="/service" element={<ServicePage />}/>
        <Route path="/works" element={<WorksPage />}/>
        <Route path="/about-me" element={<AboutPage />}/>
        <Route path="/contact" element={<ContactPage />}/>
        </Routes>
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);