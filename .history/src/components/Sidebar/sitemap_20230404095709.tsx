import Dashboard from "../../pages/dashboardChildren/Dashboard";
import { ReactComponent as HomeIcon } from "./icons/Vector.svg";
import { ReactComponent as MessageIcon } from "./icons/Messages.svg";
import { ReactComponent as AnimalsCards } from "./icons/AnimalsCards.svg";

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
];
