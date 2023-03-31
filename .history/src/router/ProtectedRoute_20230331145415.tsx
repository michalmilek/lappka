import { Navigate, Route } from "react-router-dom";

interface Props {
  Component: () => JSX.Element;
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
