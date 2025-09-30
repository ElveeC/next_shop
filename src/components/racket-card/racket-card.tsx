import { FC } from "react";
import Image from "next/image";
import styles from "./racket-card.module.css";

type RacketCardProps = {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  brandName: string;
}

const RacketCard: FC<RacketCardProps> = (racket: RacketCardProps) => {
  const { name, imageUrl, price, description, brandName } = racket;

  return (
    <article className={styles.card}>
      <div className={styles.wrapper}>
        <p className={styles.brand}>{brandName}</p>
        <h2>{name}</h2>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>&euro; {price}</p>
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
