"use client";

import { FC } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./navLink.module.css";
import cn from "classnames";

type NavLinkProps = {
  text: string;
  route: string;
}

const NavLink: FC<NavLinkProps> = (link: NavLinkProps) => {
  const pathName = usePathname();
  const { text, route } = link;

  return (
    <Link
      className={cn(styles.link, { [styles['link--current']]: pathName === route })}
      href={route}>
      {text}
    </Link>
  );
}

export default NavLink;
