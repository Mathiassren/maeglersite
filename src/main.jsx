import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import ErrorView from "./pages/ErrorView.jsx";
import Start from "./pages/Start.jsx";
import Nav from "./components/Nav.jsx";
import Login from "./pages/Login.jsx";
import DetailsView from "./pages/DetaliView.jsx"; // Make sure the file name is correct

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorView />}>
          <Route index element={<Start />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/details/:id" element={<DetailsView />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
