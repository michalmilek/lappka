import { Navigate, Outlet } from "react-router-dom";
import { logout } from "../services/authService";
import { isTokenExpired } from "../services/ShelterServices";
/* import DashboardLayout from "../pages/DashboardLayout";
import Login from "../pages/Login"; */

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const rfrToken = refreshToken?.replace(/["]/g, "");
  const isRefreshTokenExpired = isTokenExpired(refreshToken);
  console.log(rfrToken);

  if (isRefreshTokenExpired) {
    logout();
    return <Navigate to={"/"} />;
  }

  if (!isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to={"/dashboard"} />;
  }
};

export default ProtectedRoute;
