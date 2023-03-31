import { Navigate, Route, RouteProps } from "react-router-dom";

const ProtectedRoute: React.FC<RouteProps> = ({ component, ...routeProps }) => {
  const isAuthenticated = localStorage.getItem("accessToken");
  if (isAuthenticated) {
    return { component };
  } else {
    return <Navigate to={"/"} />;
  }
};

export default ProtectedRoute;
