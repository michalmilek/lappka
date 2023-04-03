import React from "react";
import HeaderForAnimalsCards from "../../components/HeaderForAnimalsCards";
import useShelterStats from "../../hooks/useShelterStats";
import { ReactComponent as AnimalsCardIcon } from "../../components/Card/icons/AnimalsCardIcon.svg";
import { ReactComponent as MagnifyingLoopIcon } from "../../components/Card/icons/MagnifyingLoop.svg";
import { ReactComponent as UserIcon } from "../../components/Card/icons/User.svg";
import Card from "../../components/Card/Card";
import AnimalsList from "../../components/AnimalsList";
import useShelterCards from "../../hooks/useShelterCards";

const AnimalCardsSite = () => {
  const { data: fetchedData, isLoading, isError, error } = useShelterStats();

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
  ];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error as any}</div>;

  return (
    <section className="w-full bg-lightGray5">
      <HeaderForAnimalsCards />
      <div className="flex items-center justify-between mt-8 px-6">
        {data.map((item) => (
          <Card
            key={item.title + item.amount}
            title={item.title}
            icon={item.icon}
            amount={item.amount}
            variant="big"
          />
        ))}
      </div>

      <AnimalsList />
    </section>
  );
};

export default AnimalCardsSite;
