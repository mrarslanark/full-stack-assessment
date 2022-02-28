import Link from "next/link";
import HeaderMenuItem from "../../shared/types/HeaderMenuItem";
import styles from "../../styles/HeaderMenu.module.css";

const HeaderMenu = ({ menu }: { menu: Array<HeaderMenuItem> }) => {
  return (
    <ul className={styles.topMenu}>
      {menu.map((item: HeaderMenuItem) => {
        return (
          <li key={item.id} className={styles.topMenuItem}>
            <Link passHref href={item.link}>
              <a>{item.title}</a>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderMenu;
