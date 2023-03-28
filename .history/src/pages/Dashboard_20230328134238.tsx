import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { ReactComponent as AnimalsCardIcon } from "../components/Card/icons/AnimalsCardIcon.svg";
import { ReactComponent as MagnifyingLoopIcon } from "../components/Card/icons/MagnifyingLoop.svg";
import { ReactComponent as UserIcon } from "../components/Card/icons/User.svg";
import { ReactComponent as HeartIcon } from "../components/Card/icons/HeartIcon.svg";

const data = [
  {
    icon: AnimalsCardIcon,
    title: "Karty zwierząt",
    amount: 235,
  },
  {
    icon: MagnifyingLoopIcon,
    title: "Szuka właściciela",
    amount: 35,
  },
  {
    icon: UserIcon,
    title: "Z właścicielem",
    amount: 200,
  },
  {
    icon: HeartIcon,
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
          {data.map((item) => (
            <Card
              icon={item.icon}
              title={item.title}
              amount={item.amount}
            />
          ))}
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
