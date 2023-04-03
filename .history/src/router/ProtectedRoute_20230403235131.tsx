import { Navigate } from "react-router-dom";
import DashboardLayout from "../pages/DashboardLayout";
import { isTokenExpired } from "../services/ShelterServices";
import { logout } from "../services/authService";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const rfrToken = refreshToken?.replace(/["]/g, "");
  console.log(rfrToken);

  if (refreshToken) {
    const isRefreshTokenExpired = isTokenExpired(rfrToken);
    if (isRefreshTokenExpired) {
      logout();
      return <Navigate to={"/"} />;
    }
  }

  if (isAuthenticated) {
    return <DashboardLayout />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default ProtectedRoute;