import { FC, Suspense } from "react";
import RacketContainer from "@/components/racket-card/racket-container";
import { getMetaRacketById } from "@/services/get-meta-racket-by-id";
import { notFound } from "next/navigation";

type RacketPageProps = {
  params: Promise<{ id: string }>;
};

export const generateMetadata = async ({ params }: RacketPageProps) => {
  const { id } = await params;
  const { data: metaData, isError: isMetaDataError } = await getMetaRacketById({ id });

  if (!metaData || isMetaDataError) {

    return {
      title: "Racket"
    };
  }

  return {
    title: metaData.name,
    description: metaData.description,
  };
}


const RacketPage: FC<RacketPageProps> = async ({ params }) => {

  const { id } = await params;

  const { data: racketActive, isError } = await getMetaRacketById({ id });

  if (isError) {
    return <div>Error...</div>
  }

  if (!racketActive) {
    return notFound();
  }

  return (
    <Suspense fallback={<div>Loading racket info...</div>}>
      <RacketContainer id={id} />
    </Suspense>
  );
};

export default RacketPage;
