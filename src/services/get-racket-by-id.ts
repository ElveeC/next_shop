import RacketType from "@/types/racket-type";
import ResponseType from "@/types/response-type";
import { cookies } from "next/headers";
import { BASE_API_URL } from "@/const/const";

interface Params {
  id: string;
}

export const getRacketById = async ({
  id,
}: Params): Promise<ResponseType<RacketType>> => {

  const cookieStore = await cookies();

  const result = await fetch(`${BASE_API_URL}/product/${id}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (result.status === 404) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { product: RacketType } = await result.json();

  return { isError: false, data: data.product };
};
