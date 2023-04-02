import { Navigate, Route, RouteProps } from "react-router-dom";
import DashboardLayout from "../pages/DashboardLayout";

const ProtectedRoute = () => {
  const isAuthenticated = localStorage.getItem("accessToken");
  if (isAuthenticated) {
    return <DashboardLayout />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default ProtectedRoute;
