import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import ErrorView from "./pages/ErrorView.jsx";
import Start from "./pages/Start.jsx";
import Nav from "./components/Nav.jsx";
import Login from "./pages/Login.jsx";
import DetailsView from "./pages/DetaliView.jsx";
import AgentsDetailsView from "./pages/AgentsDetails.jsx";
import SaleSite from "./pages/Salesite.jsx";
import AgentSite from "./pages/AgentSite.jsx";
import Contact from "./pages/Contact.jsx";
import Fav from "./pages/Favourites.jsx";
import ProtectedRoute from "./components/Auth/ProtectedRoute.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} errorElement={<ErrorView />}>
          <Route index element={<Start />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/details/:id" element={<DetailsView />} />
          <Route path="/agents/:id" element={<AgentsDetailsView />} />
          <Route path="/sale" element={<SaleSite />} />
          <Route path="/login" element={<Login />} />
          <Route path="/agentsite" element={<AgentSite />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/fav"
            element={
              <ProtectedRoute>
                <Fav />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
