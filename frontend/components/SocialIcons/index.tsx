import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import NetworkItem from "../../shared/types/NetworkItem";
import styles from "../../styles/SocialIcons.module.css";

const size = "1x";
const color = "white";

const SocialIcons = ({ networks }: { networks: Array<NetworkItem> }) => {
  return (
    <ul className={styles.social}>
      {networks.map((item: NetworkItem) => {
        return (
          <li key={item.id}>
            <Link href={item.link} passHref>
              <a target={"_blank"}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={item.icon}
                  size={size}
                  color={color}
                />
              </a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
