import { Navigate, Route } from "react-router-dom";

interface Props {
  component: JSX.Element;
}

function ProtectedRoute({ component: Component, ...props }: Props) {
  const isAuthenticated = localStorage.getItem("accessToken");
  return (
    <Route
      {...props}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate
            to="/login"
            replace
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
