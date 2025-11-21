"use client";

import { FC, use } from "react";
import Image from "next/image";
import styles from "./racket-card.module.css";
import RacketType from "@/types/racket-type";
import FavoriteButton from "../favorite-button/favorite-button";
import { UserContext } from "@/providers/user-provider";

type RacketCardProps = {
  racket: RacketType;
};

const RacketCard: FC<RacketCardProps> = ({ racket }: RacketCardProps) => {
  const { isAuthorized } = use(UserContext);
  const { id, name, imageUrl, price, description, brand, userData } = racket;

  return (
    <article className={styles.card}>
      <div className={styles.wrapper}>
        {
          userData?.isFavorite
          &&
          <span className={styles.favorite}></span>
        }
        <p className={styles.brand}>{brand.name}</p>
        <h2>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>&euro; {price}</p>
        {isAuthorized && (
          <FavoriteButton
            productId={id}
            isFavorite={Boolean(userData?.isFavorite)
            }
          />
        )}
      </div>

      <Image
        className={styles.img}
        src={imageUrl}
        alt={name}
        width={540}
        height={630}
      />
    </article>
  );
};

export default RacketCard;
