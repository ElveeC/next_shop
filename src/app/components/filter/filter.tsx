import { FC } from "react";
import Radio from "@/app/ui/radio/radio";
import { BrandFilter } from "@/app/const";
import styles from "./filter.module.css";

type FilterProps = {
  activeBrand: string;
  className?: string;
  onBrandChange: (brand: string) => void;
}

const Filter: FC<FilterProps> = ({ className, activeBrand, onBrandChange }: FilterProps) => {

  return (
    <form className={className}>
      <fieldset className={styles.wrapper}>
        <legend className={styles.legend}>Бренд</legend>
        <Radio
          name="brand"
          id={BrandFilter.All}
          label="All"
          isChecked={activeBrand === BrandFilter.All}
          onChange={(evt) => onBrandChange(evt.target.id)}
        />
        <Radio
          name="brand"
          id={BrandFilter.Head}
          label="Head"
          isChecked={activeBrand === BrandFilter.Head}
          onChange={(evt) => onBrandChange(evt.target.id)}
        />
        <Radio
          name="brand"
          id={BrandFilter.Yonex}
          label="Yonex"
          isChecked={activeBrand === BrandFilter.Yonex}
          onChange={(evt) => onBrandChange(evt.target.id)}
        />
      </fieldset>
    </form>
  );
}

export default Filter;
