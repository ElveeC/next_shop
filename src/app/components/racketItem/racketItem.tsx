import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./racketItem.module.css";

type RacketItemProps = {
  id: number;
  name: string;
  imageUrl: string;
}

const RacketItem: FC<RacketItemProps> = ({ id, name, imageUrl }) => {
  return (
    <li className={styles.item}>
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
    </li>
  );
}

export default RacketItem;
