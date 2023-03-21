import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 bg-white py-6">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={98} height={32} />
      </Link>
      <p className="text-xs text-gray-400">powered by notion API</p>
    </footer>
  );
};

export default Footer;
