import Image from "next/image";
import Link from "next/link";
import titleLogo from "../icons/title-logo.svg";

export default function Header() {
  return (
    <header className="flex w-full justify-between items-center fixed top-0 left-0 p-[2rem]">
      <Link href="/" className="w-3/5 max-w-[18rem]">
        <Image
          className="w-full"
          src={titleLogo}
          alt="the keynote wind orchestra"
        />
      </Link>
      <Link className="button mt-4" href="/details">
        詳細を見る
      </Link>
    </header>
  );
}
