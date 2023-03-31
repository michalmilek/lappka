import { Navigate, Route } from "react-router-dom";

function ProtectedRoute({ component: Component, isAuthenticated, ...props }) {
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
