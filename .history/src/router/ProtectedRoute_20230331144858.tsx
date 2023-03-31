import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, ...props }) {
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
