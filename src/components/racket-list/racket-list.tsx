import { FC } from "react";
import RacketListItem from "../racket-list-item/racket-list-item";
import RacketType from "@/types/racket-type";

import cn from "classnames";
import styles from "./racket-list.module.css";

type RacketListProps = {
  rackets: RacketType[];
  className?: string;
}

const RacketList: FC<RacketListProps> = ({ rackets, className }) => {
  return (
    <ul className={cn(styles.list, className)}>
      {rackets.map((racket) => (
        <RacketListItem
          key={racket.id}
          id={racket.id}
          name={racket.name}
          imageUrl={racket.imageUrl}
        />
      ))}
    </ul>
  );
}

export default RacketList;
