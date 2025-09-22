import { FC } from "react";
import RacketList from "../components/racketList/racketList";
import Filter from "../components/filter/filter";
import { rackets } from "../data/mock";
import styles from "./rackets.module.css";

const RacketPage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Filter className={styles.filter}/>
      <section className={styles[`list-wrapper`]}>
        <h2 className={styles.title}>Ракетки</h2>
        <RacketList rackets={rackets} />
      </section>
    </div>
  );
};

export default RacketPage;
