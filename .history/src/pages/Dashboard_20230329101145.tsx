import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { ReactComponent as AnimalsCardIcon } from "../components/Card/icons/AnimalsCardIcon.svg";
import { ReactComponent as MagnifyingLoopIcon } from "../components/Card/icons/MagnifyingLoop.svg";
import { ReactComponent as UserIcon } from "../components/Card/icons/User.svg";
import { ReactComponent as HeartIcon } from "../components/Card/icons/HeartIcon.svg";
import { useNavigate } from "react-router-dom";

const data = [
  {
    icon: <AnimalsCardIcon className="icon" />,
    title: "Karty zwierząt",
    amount: 235,
  },
  {
    icon: <MagnifyingLoopIcon className="icon" />,
    title: "Szuka właściciela",
    amount: 35,
  },
  {
    icon: <UserIcon className="icon" />,
    title: "Z właścicielem",
    amount: 200,
  },
  {
    icon: <HeartIcon className="icon" />,
    title: "Wolontariat (ilość osób)",
    amount: 25,
  },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const storageData = localStorage.getItem("user");

  let user = null;
  if (typeof storageData === "string") {
    user = JSON.parse(storageData);
  }

  if (!user) {
    return (
      <div>
        <h1>You are not logged in!</h1>
        <h2>Press login button to redirect on login page.</h2>
        <button onClick={() => navigate("/")}>Login</button>
      </div>
    );
  }

  return (
    <main className="flex">
      {user && (
        <>
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
        </>
      )}
    </main>
  );
};

export default Dashboard;
      