"use client";

import { FC } from "react";

type GlobalErrorProps = {
  reset: () => void;
}

const GlobalError: FC<GlobalErrorProps> = ({ reset }: GlobalErrorProps) => {


  return (
    <html lang="en">
      <body>
        <main>
          <div>Error while loading...</div>
          <button type="button" onClick={reset}>Try again</button>
        </main>
      </body>
    </html>
  );
}

export default GlobalError;
