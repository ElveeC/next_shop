import RacketType from "@/types/racket-type";
import ResponseType from "@/types/response-type";
import { cookies } from "next/headers";
import { BASE_API_URL } from "@/const/const";

interface Params {
  page?: number;
  limit?: number;
}

export const getRackets = async ({
  page = 1,
  limit = 2,
}: Params): Promise<ResponseType<RacketType[]>> => {

  const cookieStore = await cookies();

  const result = await fetch(
    `${BASE_API_URL}/products?page=${page}&limit=${limit}`,
    {
      headers: {
        Cookie: cookieStore.toString(),
      },
    }
  );

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: RacketType[] = await result.json();

  return { isError: false, data };
};
