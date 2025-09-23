import { FC } from "react";
import { AppRoute, Page } from "@/app/const";
import NavLink from "@/app/ui/navLink/navLink";
import styles from "./header.module.css";

const Header: FC = () => {

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Tennis store</h1>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <NavLink text={Page.HomePage} route={AppRoute.HomePage} />
          </li>
          <li className={styles.item}>
            <NavLink text={Page.Rackets} route={AppRoute.Rackets} />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
