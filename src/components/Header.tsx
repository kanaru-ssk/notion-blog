"use client";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="sticky top-0 z-10  h-20 bg-white p-5">
      <Link href="/">
        <Image src="/next.svg" alt="logo" width="197" height="40" priority />
      </Link>
    </header>
  );
};

export default Header;
