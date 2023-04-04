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
import AnimalCardsSite from "./pages/dashboardChildren/AnimalCardsSite";
import ProtectedRoute from "./router/ProtectedRoute";
import UnprotectedRoute from "./router/UnprotectedRoute";
import TestSite from "./pages/TestSite";

//osobny komponent

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <UnprotectedRoute />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Login />,
      },
    ],
  },
  {
    path: ROUTES.DASHBOARD,
    element: <ProtectedRoute />,
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
        path: ROUTES.TESTPAGE,
        element: <TestSite />,
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
