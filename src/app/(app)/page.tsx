import { FC } from "react";
import Link from "next/link";
import RacketList from "@/components/racket-list/racket-list";
import { AppRoute } from "@/const/const";
import styles from "./page.module.css";
import { getRackets } from "@/services/get-rackets";
import { getTop10Rackets } from "@/services/get-top-10-rackets";


const Page: FC = async () => {

  const racketsPromise = getRackets({page: 1, limit: 10});
  const top10Promise = getTop10Rackets();

  const [{data: rackets, isError}, {data: top10Rackets, isError: isTop10Error}] = await Promise.all([
    racketsPromise,
    top10Promise
  ]);

  return (
    <section>
      <div className={styles.wrapper}>
        <h2>Ракетки</h2>
        <Link className={styles.link} href={AppRoute.Rackets}>Все</Link>
      </div>
      {
        !isError && rackets?.length && 
        <RacketList rackets={rackets} />
      }
      <h2>Топ-10</h2>
      {
        !isTop10Error && top10Rackets?.length && 
        <RacketList rackets={top10Rackets} />
      }
    </section>
  );
};

export default Page;
