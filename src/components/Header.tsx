import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 h-12 bg-white px-4 py-2 md:h-20 md:px-8 md:py-6">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          priority
          width={49}
          height={16}
          className="h-full w-auto"
        />
      </Link>
    </header>
  );
};

export default Header;
