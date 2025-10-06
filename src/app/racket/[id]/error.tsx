"use client";

import { FC } from "react";

type ErrorProps = {
  reset: () => void;
}

const Error: FC<ErrorProps> = ({ reset }: ErrorProps) => {

  return (
    <>
      <p>Error while loading racket info</p>
      <button type="button" onClick={reset}>Try again</button>
    </>
  );
}

export default Error;
