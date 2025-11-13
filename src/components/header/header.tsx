"use client";

import { FC, use } from "react";
import { AppRoute, Page } from "@/const/const";
import NavLink from "@/ui/nav-link/nav-link";
import LogoutButton from "../logout-button/logout-button";
import { UserContext } from "@/providers/user-provider";
import styles from "./header.module.css";

const Header: FC = () => {

  const { user } = use(UserContext);

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
          <li className={styles.item}>
            <NavLink text={Page.Top10} route={AppRoute.Top10} />
          </li>

          {user
            ?
            <>
              <li>
                {user.login}
              </li>
              <li className={styles.item}>
                <LogoutButton />
              </li>
            </>
            :
            <>
              <li className={styles.item}>
                <NavLink text={Page.Login} route={AppRoute.Login} />
              </li>
              <li>
                <NavLink text={Page.Signup} route={AppRoute.Signup} />
              </li>
            </>
          }
        </ul>
      </nav>
    </header>
  );
};

export default Header;
