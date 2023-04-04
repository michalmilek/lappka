import Dashboard from "../../pages/dashboardChildren/Dashboard";
import { ReactComponent as HomeIcon } from "./icons/Vector.svg";
import { ReactComponent as MessageIcon } from "./icons/Messages.svg";
import { ReactComponent as AnimalsCards } from "./icons/AnimalsCards.svg";
import { ReactComponent as HeartIcon } from "./icons/Heart.svg";
import { ReactComponent as EmployeesIcon } from "./icons/Workers.svg";
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa";
import { ROUTES } from "../../router/routes";

export const sitemap1 = [
  {
    icon: <HomeIcon />,
    title: "Dashboard",
    route: ROUTES.DASHBOARD,
  },
  {
    icon: <MessageIcon />,
    title: "Wiadomości",
  },
  {
    icon: <AnimalsCards />,
    title: "Karty zwierząt",
    route: ROUTES.ANIMALSCARDS,
  },
  {
    icon: <HeartIcon />,
    title: "Wolontariat",
    children: [
      {
        title: "Koty",
        icon: <FaCat />,
      },
      {
        title: "Psy",
        icon: <FaDog />,
      },
    ],
  },
];

export const sitemap2 = {
  title: "Organizacja",
  elements: [
    {
      title: "Pracownicy",
      icon: <EmployeesIcon />,
    },
  ],
};
