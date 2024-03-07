import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Correct the import path as necessary

const ProtectedRoute = ({ children }) => {
  const { token } = useAuth(); // Use the token to check if user is authenticated

  if (!token) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the children components (the protected route's content)
  return children;
};

export default ProtectedRoute;
