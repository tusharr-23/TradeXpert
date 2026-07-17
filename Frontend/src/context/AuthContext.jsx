import { createContext, useContext, useEffect, useState } from "react";
import api from "../api/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Check auth status when app starts
  useEffect(() => {
    verifyUser();
  }, []);

  const verifyUser = async () => {
    try {
      const { data } = await api.get("/verify");

      if (data.success) {
        setUser(data.user);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    } catch (err) {
      setUser(null);
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    const { data } = await api.post("/login", credentials);

    if (data.success) {
      setUser(data.user);
      setIsAuthenticated(true);
    }

    return data;
  };

  const signup = async (userData) => {
    const { data } = await api.post("/signup", userData);

    if (data.success) {
      setUser(data.user);
      setIsAuthenticated(true);
    }

    return data;
  };

  const logout = async () => {
    const { data } = await api.post("/logout");

    setUser(null);
    setIsAuthenticated(false);

    return data;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        loading,
        login,
        signup,
        logout,
        verifyUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
