import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import { useTokenRefresh } from "../hooks/useTokenRefresh";

const DashboardLayout = () => {
  useTokenRefresh();
  return (
    <main className="flex">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default DashboardLayout;
