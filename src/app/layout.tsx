import Header from "@/components/Header";
import "@/styles/globals.css";

export const metadata = {
  icons: "/favicon.ico",
};

type Props = {
  children: React.ReactNode;
};

const RootLayout = ({ children }: Props) => {
  return (
    <html>
      <body>
        <Header />
        <main className="bg-gray-200 py-24 px-5">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
