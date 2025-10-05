import { FC } from "react";
import { Metadata } from "next";
import RacketsContainer from "@/components/rackets-container/rackets-container";
import { getTop10Rackets } from "@/app/services/get-top-10-rackets";
import { notFound } from "next/navigation";
import styles from "./top-10.module.css";

 export const metadata: Metadata = {
  title: "Top-10 rackets",
};

const Top10: FC = async () => {

  const { data: rackets, isError } = await getTop10Rackets();

  if (isError) {
    return <div>Error...</div>
  }

  if (!rackets || rackets?.length === 0) {
    return notFound();
  }

  return (
    <>
      <h3 className={styles.title}>Топ-10</h3>
      <RacketsContainer rackets={rackets} />
    </>
  );
};

export default Top10;
