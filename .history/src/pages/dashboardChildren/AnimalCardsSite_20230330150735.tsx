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
  const { data: fetchedDataCardss } = useShelterCards();
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
  ];
  return (
    <section className="w-full bg-lightGray5">
      <HeaderForAnimalsCards />
      <div className="flex items-center justify-between mt-8 px-6">
        {data.map((item) => (
          <Card
            title={item.title}
            icon={item.icon}
            amount={item.amount}
            variant="big"
          />
        ))}
      </div>

      <AnimalsList animals={fetchedData.items} />
    </section>
  );
};

export default AnimalCardsSite;
