"use server";

import { BASE_API_URL } from "@/const/const";
import { parseSetCookie } from "@/helpers/parse-set-cookie";
import { cookies } from "next/headers";
import { LoginState } from "@/types/login-type";

export const loginAction = async (_: LoginState, formData: FormData) => {
  const login = formData.get("login")?.toString() || "";
  const password = formData.get("password")?.toString() || "";

  const result = await fetch(`${BASE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify({
      login,
      password,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (result.status !== 200) {
    return { error: "invalid login or password" };
  }

  const cookiesStore = await cookies();
  const setCookieHeader = result.headers.getSetCookie();

  if (setCookieHeader) {
    const parsed = parseSetCookie(setCookieHeader);
    for (const cookie of parsed) {
      cookiesStore.set(cookie.name, cookie.value, cookie.options);
    }
  }

  return { error: "", redirectTo: "/" };
};
