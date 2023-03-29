import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { ReactComponent as AnimalsCardIcon } from "../components/Card/icons/AnimalsCardIcon.svg";
import { ReactComponent as MagnifyingLoopIcon } from "../components/Card/icons/MagnifyingLoop.svg";
import { ReactComponent as UserIcon } from "../components/Card/icons/User.svg";
import { ReactComponent as HeartIcon } from "../components/Card/icons/HeartIcon.svg";
import { useNavigate } from "react-router-dom";
import useShelterStats from "../hooks/useShelterStats";
import { getShelterCards, getShelterStats } from "../services/ShelterServices";

const Dashboard = () => {
  const { data: fetchedData } = useShelterStats();

  const data = [
    {
      icon: <AnimalsCardIcon className="icon" />,
      title: "Karty zwierząt",
      amount: fetchedData?.adoptedCount,
    },
    {
      icon: <MagnifyingLoopIcon className="icon" />,
      title: "Szuka właściciela",
      amount: fetchedData?.toAdoptCount,
    },
    {
      icon: <UserIcon className="icon" />,
      title: "Z właścicielem",
      amount: fetchedData?.cardCount,
    },
    {
      icon: <HeartIcon className="icon" />,
      title: "Wolontariat (ilość osób)",
      amount: fetchedData?.volunteerCount,
    },
  ];

  //getShelterStats();
  return (
    <main className="flex">
      <Sidebar />
      <section className="w-full bg-lightGray5">
        <Header />
        <article className="px-6 flex w-full justify-between mt-7">
          {data.map((item) => (
            <Card
              key={item.title}
              icon={item.icon}
              title={item.title}
              amount={item.amount}
            />
          ))}
        </article>
        <article className="mt-4 flex justify-between"></article>
      </section>
    </main>
  );
};

export default Dashboard;
      