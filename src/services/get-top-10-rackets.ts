import RacketType from "@/types/racket-type";
import ResponseType from "@/types/response-type";
import { TOP_10_REQUEST_TAG } from "@/const/const";
import { cookies } from "next/headers";
import { BASE_API_URL } from "@/const/const";

export const getTop10Rackets = async (): Promise<ResponseType<RacketType[]>> => {
  const cookieStore = await cookies();

  const result = await fetch(`${BASE_API_URL}/top-10`, {
    headers: {
      Cookie: cookieStore.toString()
    },
    
    next: {
      tags: [TOP_10_REQUEST_TAG],
    }
  });

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: RacketType[] = await result.json();

  return { isError: false, data };
};
