import { Navigate, Route } from "react-router-dom";

interface Props {
  component: React.ReactNode;
}

export default function ProtectedRoute({ component, ...props }: Props) {
  const isAuthenticated = localStorage.getItem("accessToken");
  return (
    <Route
      element={
        isAuthenticated ? (
          { component }
        ) : (
          <Navigate
            to="/"
            replace
          />
        )
      }
      {...props}
    />
  );
}
