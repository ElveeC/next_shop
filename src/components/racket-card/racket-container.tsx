import { FC } from "react";
import { notFound } from "next/navigation";
import RacketCard from "./racket-card";
import { getRacketById } from "@/services/get-racket-by-id";

type RacketContainerProps = {
  id: string
}

const RacketContainer: FC<RacketContainerProps> = async ({ id }) => {

  const { data: racketActive, isError } = await getRacketById({ id });

  if (isError) {
    return <div>Error...</div>
  }

  if (!racketActive) {
    return notFound();
  }
  return (
    <RacketCard racket={racketActive} />
  );
}

export default RacketContainer;
