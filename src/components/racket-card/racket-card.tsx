"use client";

import { FC, use } from "react";
import Image from "next/image";
import styles from "./racket-card.module.css";
import { UserContext } from "@/providers/user-provider";

type RacketCardProps = {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  brandName: string;
}

const RacketCard: FC<RacketCardProps> = (racket: RacketCardProps) => {
  const { isAuthorized } = use(UserContext);
  const { name, imageUrl, price, description, brandName } = racket;

  return (
    <article className={styles.card}>
      <div className={styles.wrapper}>
        <p className={styles.brand}>{brandName}</p>
        <h2>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>&euro; {price}</p>
        {
          isAuthorized
          &&
          <button>В избранное</button>
        }
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
}

export default RacketCard;
