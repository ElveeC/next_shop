import RacketType from "@/types/racket-type";
import ResponseType from "@/types/response-type";
import { TOP_10_REQUEST_TAG } from "@/const/const";

export const getTop10Rackets = async (): Promise<ResponseType<RacketType[]>> => {
  const result = await fetch(`http://localhost:4000/api/top-10`, {
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
