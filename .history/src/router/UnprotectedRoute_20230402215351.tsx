import { Navigate, Outlet } from "react-router-dom";
import DashboardLayout from "../pages/DashboardLayout";
import Login from "../pages/Login";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("accessToken");

  if (!isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to={"/dashboard"} />;
  }
};

export default ProtectedRoute;
