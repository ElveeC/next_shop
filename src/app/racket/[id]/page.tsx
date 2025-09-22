import { FC } from "react";
import RacketCard from "@/app/components/racketCard/racketCard";
import { rackets } from "@/app/data/mock";

type RacketPageProps = {
  params: Promise<{ id: string }>;
};

export const generateStaticParams = () => {
    return [{id: '1'}, {id: '2'}, {id: '3'}]
}

const RacketPage: FC<RacketPageProps> = async ({ params }) => {

  const { id } = await params;

  const racketActive = rackets.find((racket) => racket.id.toString() === id);

  if (!racketActive) {
    return;
  }

  return (
    <RacketCard
      name={racketActive.name}
      brandName={racketActive.brand.name}
      imageUrl={racketActive.imageUrl}
      price={racketActive.price}
      description={racketActive.description}
    />
  );
};

export default RacketPage;
