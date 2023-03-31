import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from "./reportWebVitals";
import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import { ROUTES } from "./router/routes";
import Dashboard from "./pages/dashboardChildren/Dashboard";
import Login from "./pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import DashboardLayout from "./pages/DashboardLayout";
import AnimalCardsSite from "./pages/dashboardChildren/AnimalCardsSite";
import { useTokenRefresh } from "./hooks/useTokenRefresh";
import { isTokenExpired } from "./services/ShelterServices";

const protectedRoutes = localStorage.getItem("accessToken");

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: !protectedRoutes ? <Login /> : <Navigate to={ROUTES.DASHBOARD} />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: protectedRoutes ? (
      <DashboardLayout />
    ) : (
      <Navigate to={ROUTES.HOME} />
    ),
    children: [
      {
        path: ROUTES.DASHBOARD,
        element: <Dashboard />,
      },
      {
        path: ROUTES.ANIMALSCARDS,
        element: <AnimalCardsSite />,
      },
      {
        path: "*",
        element: <AnimalCardsSite />,
      },
    ],
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
