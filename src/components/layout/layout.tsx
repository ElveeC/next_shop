import { PropsWithChildren, FC } from "react";

import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
