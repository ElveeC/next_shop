"use client";

import { FC, useState } from "react";
import RacketList from "../components/racketList/racketList";
import Filter from "../components/filter/filter";
import { BrandFilter } from "../const";
import { rackets } from "../data/mock";
import styles from "./rackets.module.css";

const RacketPage: FC = () => {
  const [activeBrand, setActiveBrand] = useState<string>(BrandFilter.All);

  const handleBrandChange = (brand: string) => {
    setActiveBrand(brand);
  }

  const racketsToShow = activeBrand === BrandFilter.All ? rackets.slice() : rackets.filter((racket) => racket.brand.name.toLowerCase() === activeBrand);

  return (
    <div className={styles.wrapper}>
      <Filter className={styles.filter} activeBrand={activeBrand} onBrandChange={handleBrandChange} />
      <section className={styles[`list-wrapper`]}>
        <h2 className={styles.title}>Ракетки</h2>
        <RacketList rackets={racketsToShow} />
      </section>
    </div>
  );
};

export default RacketPage;
