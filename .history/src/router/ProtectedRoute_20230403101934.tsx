import { Navigate } from "react-router-dom";
import DashboardLayout from "../pages/DashboardLayout";
import { isTokenExpired } from "../services/ShelterServices";
import { logout } from "../services/authService";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const rfrToken = refreshToken?.replace(/["]/g, "");
  const isRefreshTokenExpired = isTokenExpired(rfrToken);

  if (isRefreshTokenExpired) {
    logout();
  }

  if (isAuthenticated) {
    return <DashboardLayout />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default ProtectedRoute;