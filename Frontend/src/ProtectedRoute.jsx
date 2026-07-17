import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  // Wait until authentication check finishes
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // User is not logged in
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // User is logged in
  return children;
};

export default ProtectedRoute;
