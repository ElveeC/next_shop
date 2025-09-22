"use client";

import { FC } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./header.module.css";
import cn from "classnames";

const Header: FC = () => {

  const pathName = usePathname();

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Tennis store</h1>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            {pathName === "/" ?
              <p className={cn(styles.link, styles['link--active'])} >Главная</p>
              :
              <Link className={styles.link} href="/">Главная</Link>
            }
          </li>
          <li className={styles.item}>
            {pathName === "/rackets" ?
              <p className={cn(styles.link, styles['link--active'])} >Ракетки</p>
              :
              <Link className={styles.link} href="/rackets">Ракетки</Link>
            }
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
