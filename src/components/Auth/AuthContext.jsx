import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (token) {
      fetchUserProfile();
    }
  }, [token]);

  const login = async (username, password) => {
    try {
      const response = await fetch(
        "https://dinmaegler.onrender.com/auth/local",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ identifier: username, password }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setToken(data.jwt);
        localStorage.setItem("token", data.jwt);
        fetchUserProfile();
        navigate("/"); // Navigate to another page after login
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Rethrow the error for the component to handle
    }
  };

  const logout = () => {
    setToken(null);
    setUserProfile(null);
    localStorage.removeItem("token");
    navigate("/"); // Optional: Navigate to login page after logout
  };

  const fetchUserProfile = async () => {
    try {
      const response = await fetch("https://dinmaegler.onrender.com/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = await response.json();
      if (response.ok) {
        setUserProfile(userData);
      } else {
        throw new Error(userData.message || "Failed to fetch user profile");
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider value={{ token, userProfile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
