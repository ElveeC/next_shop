"use client";

import { ChangeEvent, FC, useState } from "react";
import Radio from "@/app/ui/radio/radio";

type FilterProps = {
  className?: string;
}
 
const Filter: FC<FilterProps> = ({className}: FilterProps) => {
  const [selected, setSelected] = useState('all');

  const onFilterChange = (evt: ChangeEvent<HTMLInputElement>) => {
  setSelected(evt.target.id);
}

  return (
    <form className={className}>
      <Radio name="brand" id="all" label="All" isChecked={selected === "all"} onChange={onFilterChange} />
      <Radio name="brand" id="head" label="Head" isChecked={selected === "head"} onChange={onFilterChange} />
      <Radio name="brand" id="yonex" label="Yonex" isChecked={selected === "yonex"} onChange={onFilterChange} />
    </form>
  );
}

export default Filter;
