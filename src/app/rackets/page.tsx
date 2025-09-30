import { FC } from "react";
import RacketsContainer from "@/components/rackets-container/rackets-container";
import { getRackets } from "../services/get-rackets";
import { notFound } from "next/navigation";

const RacketPage: FC = async () => {

  const { data: rackets, isError } = await getRackets ({page: 1, limit: 20});

  if ( isError ) {
    return <div>Error...</div>
  }

  if (!rackets || rackets?.length === 0) {
    return notFound();
  }

  return (
    <RacketsContainer rackets={rackets}/>
  );
};

export default RacketPage;
