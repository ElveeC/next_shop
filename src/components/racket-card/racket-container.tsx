import { FC } from "react";
import { notFound } from "next/navigation";
import RacketCard from "./racket-card";
import { getRacketById } from "@/app/services/get-racket-by-id";

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
    <RacketCard name={racketActive.name}
      brandName={racketActive.brand.name}
      imageUrl={racketActive.imageUrl}
      price={racketActive.price}
      description={racketActive.description} />
  );
}

export default RacketContainer;
