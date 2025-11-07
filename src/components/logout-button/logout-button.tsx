"use client";

import { useTransition } from "react";
import { BASE_API_URL } from "@/const/const";

const handleLogout = async () => {
  await fetch (`${BASE_API_URL}/auth/logout`, {
    credentials: "include",
    method: "DELETE"
  });

  location.assign("/");
};

const LogoutButton = () => {

  const [ isPending, startTransition ] = useTransition();

  return (

    <button onClick={() => {startTransition(handleLogout)}} disabled={isPending} type="button">Log out</button>

  );
};

export default LogoutButton;
