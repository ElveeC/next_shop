import { FC } from "react";
import RacketCard from "@/components/racket-card/racket-card";
import { getRacketById } from "@/app/services/get-racket-by-id";
import { notFound } from "next/navigation";

type RacketPageProps = {
  params: Promise<{ id: string }>;
};

const RacketPage: FC<RacketPageProps> = async ({ params }) => {

  const { id } = await params;

  const { data: racketActive, isError } = await getRacketById({ id });

  if (isError) {
    return <div>Error...</div>
  }

  if (!racketActive) {
    return notFound();
  }

  return (
    <div>
      <RacketCard
        name={racketActive.name}
        brandName={racketActive.brand.name}
        imageUrl={racketActive.imageUrl}
        price={racketActive.price}
        description={racketActive.description}
      />
    </div>
  );
};

export default RacketPage;
