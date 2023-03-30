import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <main className="flex">
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default DashboardLayout;
