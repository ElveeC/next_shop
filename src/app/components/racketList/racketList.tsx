import { FC } from "react";
import RacketListItem from "../racketListItem/racketListItem";
import RacketType from "@/app/types/racketType";
import cn from "classnames";
import styles from "./racketList.module.css";

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
