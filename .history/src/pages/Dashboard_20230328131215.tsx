import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <main className="flex bg-lightGray5">
      <Sidebar />
      <div className="w-full">
        <Header />
      </div>
    </main>
  );
};

export default Dashboard;
