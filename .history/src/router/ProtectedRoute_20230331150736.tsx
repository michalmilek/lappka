import { Navigate, Route, RouteProps } from "react-router-dom";

const ProtectedRoute: React.FC<RouteProps> = ({ ...routeProps }) => {
  const isAuthenticated = localStorage.getItem("accessToken");
  if (isAuthenticated) {
    return <Route {...routeProps} />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default ProtectedRoute;
