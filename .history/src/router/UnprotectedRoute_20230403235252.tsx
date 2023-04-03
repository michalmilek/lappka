import { Navigate, Outlet } from "react-router-dom";
import { logout } from "../services/authService";
import { isTokenExpired } from "../services/ShelterServices";
/* import DashboardLayout from "../pages/DashboardLayout";
import Login from "../pages/Login"; */

const UnprotectedRoute = () => {
  const isAuthenticated = localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to={"/dashboard"} />;
  }
};

export default UnprotectedRoute;
