import type { Metadata } from "next";
import { FC } from "react";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tennis shop",
  description: "Tennis store app",
};

const RootLayout: FC<
  Readonly<{
    children: React.ReactNode;
  }>
> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
