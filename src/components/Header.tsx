"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 md:h-20 h-12 bg-white p-4 md:p-8">
      <Link href="/">
        <Image
          src="/next.svg"
          alt="logo"
          priority
          width={700}
          height={475}
          className="w-auto h-full"
        />
      </Link>
    </header>
  );
};

export default Header;
