import Dashboard from "../../pages/dashboardChildren/Dashboard";
import { ReactComponent as HomeIcon } from "./icons/Vector.svg";
import { ReactComponent as MessageIcon } from "./icons/Messages.svg";
import { ReactComponent as AnimalsCards } from "./icons/AnimalsCards.svg";
import { ReactComponent as HeartIcon } from "./icons/Heart.svg";
import { FaCat } from "react-icons/fa";
import { FaDog } from "react-icons/fa";

export const sitemap = [
  {
    icon: <HomeIcon />,
    title: "Dashboard",
  },
  {
    icon: <MessageIcon />,
    title: "Wiadomości",
  },
  {
    icon: <AnimalsCards />,
    title: "Karty zwierząt",
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
