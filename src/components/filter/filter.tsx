import { FC } from "react";
import Radio from "@/ui/radio/radio";
import { BrandFilter } from "@/const/const";
import styles from "./filter.module.css";

type FilterProps = {
  activeBrand: string;
  className?: string;
  onBrandChange: (brand: string) => void;
}

const Filter: FC<FilterProps> = ({ className, activeBrand, onBrandChange }: FilterProps) => {

  const brandChoiceButtons = [
    {
      id: BrandFilter.All,
      label: "All"
    },
    {
      id: BrandFilter.Head,
      label: "Head"
    },
    {
      id: BrandFilter.Yonex,
      label: "Yonex"
    },
  ];

  return (
    <form className={className}>
      <fieldset className={styles.wrapper}>
        <legend className={styles.legend}>Бренд</legend>
        {brandChoiceButtons.map((button) => <Radio
          key={button.id}
          name="brand"
          id={button.id}
          label={button.label}
          isChecked={activeBrand === button.id}
          onChange={(evt) => onBrandChange(evt.target.id)}
        />)}
      </fieldset>
    </form>
  );
}

export default Filter;
