import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <main className="flex">
      <Sidebar />
      <div className="w-full bg-lightGray5">
        <Header />
      </div>
    </main>
  );
};

export default Dashboard;
