import { MouseEventHandler } from "react";
import styles from "../../styles/Menu.module.css";

const Menu = ({
  onClickForests,
}: {
  onClickForests: MouseEventHandler<HTMLLIElement>;
}) => {
  return (
    <ul className={styles.menu}>
      <li onClick={onClickForests}>
        <p className={styles.linkItem}>Our Forests</p>
      </li>
      <li>
        <p className={styles.linkItem}>Our Impacts</p>
      </li>
      <li>
        <p className={styles.linkItem}>How it works</p>
      </li>
      <li>
        <p className={styles.linkItem}>Why Forests</p>
      </li>
      <li>
        <p className={styles.linkItem}>Media &amp; Blog</p>
      </li>
      <li>
        <p className={styles.linkItem}>About</p>
      </li>
    </ul>
  );
};

export default Menu;
