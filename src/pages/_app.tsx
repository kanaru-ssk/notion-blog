import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Header />
      <main className="bg-gray-200">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default MyApp;
