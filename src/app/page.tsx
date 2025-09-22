import { FC } from "react";
import Link from "next/link";
import RacketList from "./components/racketList/racketList";
import { rackets } from "./data/mock";
import styles from "./page.module.css";

const Page: FC = () => {

  const initialRackets = rackets.slice(0, 3);

  return (
    <section>
      <div className={styles.wrapper}>
        <h2>Ракетки</h2>
        <Link className={styles.link} href="/rackets">Все</Link>
      </div>
      <RacketList rackets={initialRackets} />
    </section>
  );
};

export default Page;
