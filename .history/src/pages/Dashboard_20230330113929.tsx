import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { ReactComponent as AnimalsCardIcon } from "../components/Card/icons/AnimalsCardIcon.svg";
import { ReactComponent as MagnifyingLoopIcon } from "../components/Card/icons/MagnifyingLoop.svg";
import { ReactComponent as UserIcon } from "../components/Card/icons/User.svg";
import { ReactComponent as HeartIcon } from "../components/Card/icons/HeartIcon.svg";
import useShelterStats from "../hooks/useShelterStats";
import useShelterCards from "../hooks/useShelterCards";
import Chart from "../components/Chart";
import Volunteering from "../components/Volunteering";
import AnimalCards from "../components/AnimalCards";

const Dashboard = () => {
  const { data: fetchedData } = useShelterStats();
  const { data: fetchedCards } = useShelterCards();

  /* const animals3 = fetchedCards?.items.slice(0, 3); */
  console.log(fetchedCards);

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
        <article className="mt-4 px-6 py-2 flex items-center justify-between h-auto">
          <Chart />
          <Volunteering />
        </article>
        <article>
          <AnimalCards />
        </article>
      </section>
    </main>
  );
};

export default Dashboard;
      