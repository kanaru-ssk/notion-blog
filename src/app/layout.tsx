import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";

export const metadata = {
  icons: "/favicon.svg",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <body>
        <Header />
        <main className="bg-gray-200">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
