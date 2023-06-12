import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ExitPreviewButton } from "@/components/ExitPreviewButton";

export const Header = () => {
  const { isPreview } = useRouter();

  return (
    <header className="sticky top-0 z-10 flex h-12 items-center justify-between px-4 backdrop-blur md:h-20 md:px-8">
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="logo"
          priority
          width={123}
          height={45}
          className="h-8 w-auto md:h-12"
        />
      </Link>
      {isPreview && <ExitPreviewButton />}
    </header>
  );
};
