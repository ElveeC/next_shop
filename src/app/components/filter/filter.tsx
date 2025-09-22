import { FC } from "react";
import Radio from "@/app/ui/radio/radio";
import { BrandFilter } from "@/app/const";
import styles from "./filter.module.css";

type FilterProps = {
  activeBrand: string;
  className?: string;
  onBrandChange: (brand: BrandFilter) => void;
}

const Filter: FC<FilterProps> = ({ className, activeBrand, onBrandChange }: FilterProps) => {

  return (
    <form className={className}>
      <fieldset className={styles.wrapper}>
        <legend className={styles.legend}>Бренд</legend>
        <Radio
          name="brand"
          id="all"
          label="All"
          isChecked={activeBrand === "all"}
          onChange={(evt) => onBrandChange(evt.target.id as BrandFilter)}
        />
        <Radio
          name="brand"
          id="head" label="Head"
          isChecked={activeBrand === "head"}
          onChange={(evt) => onBrandChange(evt.target.id as BrandFilter)}
        />
        <Radio
          name="brand"
          id="yonex"
          label="Yonex"
          isChecked={activeBrand === "yonex"}
          onChange={(evt) => onBrandChange(evt.target.id as BrandFilter)}
        />
      </fieldset>
    </form>
  );
}

export default Filter;
