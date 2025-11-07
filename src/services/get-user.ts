import ResponseType from "@/types/response-type";
import UserType from "@/types/user-type";
import { cookies } from "next/headers";

export const getUser = async (): Promise<ResponseType<UserType>> => {
  const cookieStore = await cookies();

  const result = await fetch(`http://localhost:4000/api/auth/user`, {
    credentials: "include",
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  if (result.status === 401) {
    return { isError: false, data: undefined };
  }

  if (!result.ok) {
    return { isError: true, data: undefined };
  }

  const data: { user: UserType } = await result.json();

  return { isError: false, data: data.user };
};
