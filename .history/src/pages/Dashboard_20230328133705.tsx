import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { ReactComponent as AnimalsCardIcon } from "../components/icons/AnimalsCardIcon.svg";

const data = [
  {
    icon: AnimalsCardIcon,
    title: "Karty zwierząt",
    amount: 235,
  },
  {
    icon: AnimalsCardIcon,
    title: "Szuka właściciela",
    amount: 35,
  },
  {
    icon: AnimalsCardIcon,
    title: "Z właścicielem",
    amount: 200,
  },
  {
    icon: AnimalsCardIcon,
    title: "Wolontariat (ilość osób)",
    amount: 25,
  },
];

const Dashboard = () => {
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-full bg-lightGray5">
        <Header />
        <article className="px-6 flex w-full justify-between mt-7">
          <Card />
          <Card />
          <Card />
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
