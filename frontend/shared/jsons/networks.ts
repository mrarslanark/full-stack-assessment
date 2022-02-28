import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import NetworkItem from "../types/NetworkItem";

const networks: Array<NetworkItem> = [
  {
    id: "0",
    link: "https://twitter.com/StandForTrees",
    icon: faTwitter,
  },
  {
    id: "1",
    link: "https://www.youtube.com/c/StandForTreesNow/featured",
    icon: faFacebookF,
  },
  {
    id: "2",
    link: "https://www.instagram.com/standfortrees/",
    icon: faYoutube,
  },
  {
    id: "3",
    link: "https://www.instagram.com/standfortrees/",
    icon: faInstagram,
  },
  {
    id: "4",
    link: "https://www.instagram.com/standfortrees/",
    icon: faEnvelope,
  },
];

export default networks;
