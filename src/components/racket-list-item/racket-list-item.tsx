"use client";

import { FC, use } from "react";
import Link from "next/link";
import Image from "next/image";
import FavoriteButton from "../favorite-button/favorite-button";
import { UserContext } from "@/providers/user-provider";
import RacketType from "@/types/racket-type";
import styles from "./racket-list-item.module.css";

type RacketListItemProps = {
  racket: RacketType;
}

const RacketListItem: FC<RacketListItemProps> = ({ racket }: RacketListItemProps) => {

  const { isAuthorized } = use(UserContext);

  const { id, imageUrl, name, userData } = racket;

  return (
    <li className={styles.item}>
      {
        userData?.isFavorite
        &&
        <span className={styles.favorite}></span>
      }
      <Link className={styles.link} href={`/racket/${id}`}>
        <Image
          className={styles.img}
          src={imageUrl}
          alt={name}
          width={360}
          height={440}
        />
        <h3 className={styles.title}>{name}</h3>

      </Link>
      {
        isAuthorized
        &&
        <FavoriteButton productId={id} isFavorite={Boolean(userData?.isFavorite)} />
      }
    </li>
  );
}

export default RacketListItem;
