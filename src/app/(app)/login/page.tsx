"use client";

import { useActionState, useEffect } from "react";
import { loginAction } from "./login-action";
import Link from "next/link";
import { AppRoute } from "@/const/const";


const Login = () => {

  const [{ error, redirectTo }, formAction, isPending] = useActionState(loginAction, { error: "" });

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="login">Login</label>
        <input name="login" type="text" placeholder="Enter your login" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="Enter your password" required />
      </div>
      {
        error
        &&
        <div>
          <p>{error}</p>
          <p>Enter valid data or <Link href={AppRoute.Signup}>sign up</Link></p>
        </div>
      }
      <button disabled={isPending} type="submit">Submit</button>
    </form>
  );
};

export default Login;
