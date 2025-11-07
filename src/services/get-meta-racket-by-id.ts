import RacketType from "@/types/racket-type";
import ResponseType from "@/types/response-type";

type Params = {
  id: string;
};

export const getMetaRacketById = async ({
  id,
}: Params): Promise<ResponseType<RacketType>> => {

  const result = await fetch(`http://localhost:4000/api/meta/product/${id}`);

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: RacketType } = await result.json();

  return { isError: false, data: data.product };
};
