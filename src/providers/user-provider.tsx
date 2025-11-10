"use client";

import { createContext, FC, PropsWithChildren } from "react";
import UserType from "@/types/user-type";

interface UserContextType {
  user: UserType | null;
  isAuthorized: boolean;
}
export const UserContext = createContext<UserContextType>({ user: null, isAuthorized: false });

interface Props extends PropsWithChildren {
  user: UserType | null;
}

export const UserProvider: FC<Props> = ({ user, children }) => {
  return (
    <UserContext value={{ user, isAuthorized: Boolean(user) }}>
      {children}
    </UserContext>);
};
