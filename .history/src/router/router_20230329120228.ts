import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./routes";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Login />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
  },
]);
