"use client";

import { FC } from "react";

type ErrorProps = {
  reset: () => void;
}

const Error: FC<ErrorProps> = ({ reset }: ErrorProps) => {

  return (
    <>
      <p>An error occurred...</p>
      <button type="button" onClick={reset}>Try again</button>
    </>
  );
}

export default Error;
