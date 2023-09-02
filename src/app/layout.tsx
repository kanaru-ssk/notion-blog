import "@/styles/globals.css";
import type { Metadata, NextPage } from "next";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { defaultMetadata } from "@/constants/defaultMetadata";

type Props = {
  children: ReactNode;
};

const RootLayout: NextPage<Props> = ({ children }) => (
  <html lang="ja">
    <body className="scroll-pt-28 scroll-smooth">
      <Header />
      {children}
      <Footer />
    </body>
  </html>
);

export default RootLayout;

export const metadata: Metadata = defaultMetadata;
