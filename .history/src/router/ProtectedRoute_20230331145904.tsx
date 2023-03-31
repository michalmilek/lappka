import { Navigate, Route } from "react-router-dom";

interface Props {
  Component: React.ReactNode;
}

export default function ProtectedRoute({ Component, ...props }: Props) {
  const isAuthenticated = localStorage.getItem("accessToken");
  return (
    <Route
      {...props}
      element={
        isAuthenticated ? (
          <Component />
        ) : (
          <Navigate
            to="/"
            replace
          />
        )
      }
    />
  );
}
