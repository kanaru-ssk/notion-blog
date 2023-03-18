import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2 bg-white py-6">
      <Link href="/" className="mx-auto inline-block w-fit">
        <Image
          src="/logo.svg"
          alt="logo"
          width={49}
          height={16}
          className="h-8 w-auto"
        />
      </Link>
      <p className="text-xs text-gray-400">powered by notion API</p>
    </footer>
  );
};

export default Footer;
