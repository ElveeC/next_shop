import { FC } from "react";
import Image from "next/image";
import styles from "./racket.module.css";

type RacketProps = {
  name: string;
  imageUrl: string;
  price: number;
  description: string;
  brandName: string;
}

const Racket: FC<RacketProps> = (racket: RacketProps) => {
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

export default Racket;
