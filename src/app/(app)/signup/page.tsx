"use client";

import { useActionState, useEffect } from "react";
import { signupAction } from "./signup-action";


const Signup = () => {

  const [ {error, redirectTo}, formAction, isPending] = useActionState(signupAction, {error: ""});

  useEffect(() => {
    if (redirectTo) {
      location.assign(redirectTo);
    }
  }, [redirectTo]);

  return (
    <form action={formAction}>
      <div>
        <label htmlFor="login">Зарегистрироваться</label>
        <input name="login" type="text" placeholder="Enter your login" required />
      </div>
         <div>
        <label htmlFor="password">Password</label>
        <input name="password" type="password" placeholder="Enter your password" required />
      </div>
      {error && <div>{error}</div>}
      <button disabled={isPending} type="submit">Submit</button>
    </form>
  );
};

export default Signup;
