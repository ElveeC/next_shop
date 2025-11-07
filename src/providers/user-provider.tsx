"use client";

import { createContext, FC, PropsWithChildren } from "react";
import UserType from "@/types/user-type";

interface UserContextType {
  user: UserType | null;
}
export const UserContext = createContext<UserContextType>({ user: null });

interface Props extends PropsWithChildren {
  user: UserType | null;
}

export const UserProvider: FC<Props> = ({ user, children }) => {
  return <UserContext value={{ user }}>{children}</UserContext>;
};
