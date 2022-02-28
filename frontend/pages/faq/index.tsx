import { Popover, PopoverContent, PopoverTrigger } from "@chakra-ui/react";
import {
  faCaretDown,
  faCartShopping,
  faSearch,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Forests from "../../components/Forests";
import HeaderMenu from "../../components/HeaderMenu";
import Menu from "../../components/Menu";
import SocialIcons from "../../components/SocialIcons";
import headerMenus from "../../shared/jsons/headerMenus";
import networks from "../../shared/jsons/networks";
import styles from "../../styles/Faq.module.css";

const Faq: NextPage = ({ regions }: any) => {
  const [isForestsMenuOpen, setForestsMenuOpen] = useState(false);

  const toggleForestMenu = () => setForestsMenuOpen((prevState) => !prevState);

  return (
    <div>
      <Head>
        <title>Save Forests and Heal the Climate | Stand for trees</title>
        <meta name="description" content="Frequently Asked Questions page" />
      </Head>
      <nav className={styles.navbar}>
        <SocialIcons networks={networks} />
        <HeaderMenu menu={headerMenus} />
      </nav>
      <div className={styles.header}>
        <Image
          src={"/images/logo.png"}
          alt={"Logo"}
          className={styles.logo}
          width={200}
          height={50}
        />
        <Menu onClickForests={toggleForestMenu} />
        <ul className={styles.actionContainer}>
          <li>
            <p className={styles.actionItem}>
              <FontAwesomeIcon
                className={styles.actionItem}
                icon={faCaretDown}
              />
              USD
            </p>
          </li>
          <li>
            <FontAwesomeIcon className={styles.actionItem} icon={faSearch} />
          </li>
          <li>
            <FontAwesomeIcon className={styles.actionItem} icon={faUser} />
          </li>
          <li>
            <FontAwesomeIcon
              className={styles.actionItem}
              icon={faCartShopping}
            />
          </li>
        </ul>
      </div>
      {isForestsMenuOpen && <Forests regions={regions} />}
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const res = await fetch("http://localhost:1337/api/regions?populate=*");
    const regions = await res.json();

    return {
      props: {
        regions,
      },
    };
  } catch (err) {
    console.log(err);
  }
};

export default Faq;
