import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-4 bg-white py-8">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" priority width={123} height={45} />
      </Link>
      <p className="text-xs text-gray-400">powered by notion API</p>
    </footer>
  );
};
