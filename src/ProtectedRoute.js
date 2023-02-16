import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export const ProtectedRoute = ({ children }) => {
  const token = cookies.get("TOKEN");

  if (!token) {
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};