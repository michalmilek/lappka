import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-full bg-lightGray5">
        <Header />
        <article>
          <Card />
          <Card />
          <Card />
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
