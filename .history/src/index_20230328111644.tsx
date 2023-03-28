import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./pages/App";
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import { ROUTES } from "./router/routes";

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <App />,
  },
  {
    path: ROUTES.DASHBOARD,
    element: <App />,
  },
  {
    path: ROUTES.ANIMALSCARDS,
    element: <App />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
