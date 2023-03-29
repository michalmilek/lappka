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
