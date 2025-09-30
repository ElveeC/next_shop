"use client";

import { FC, useState } from "react";
import RacketList from "@/components/racket-list/racket-list";
import Filter from "@/components/filter/filter";
import { BrandFilter } from "@/const/const";
import RacketType from "@/types/racket-type";
import styles from "./rackets-container.module.css";

type RacketsContainerProps = {
    rackets: RacketType[]
}

const RacketsContainer: FC<RacketsContainerProps> = ({rackets}: RacketsContainerProps) => {
  const [activeBrand, setActiveBrand] = useState<string>(BrandFilter.All);

  const racketsToShow = activeBrand === BrandFilter.All ? rackets : rackets.filter((racket) => racket.brand.name.toLowerCase() === activeBrand);

  return (
    <div className={styles.wrapper}>
      <Filter
        className={styles.filter}
        activeBrand={activeBrand}
        onBrandChange={(brand: string) => setActiveBrand(brand)}
      />
      <section className={styles[`list-wrapper`]}>
        <h2 className={styles.title}>Ракетки</h2>
        <RacketList rackets={racketsToShow} />
      </section>
    </div>
  );
};

export default RacketsContainer;
