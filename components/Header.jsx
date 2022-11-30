import Image from "next/image";
import Link from "next/link";
import titleLogo from "../icons/title-logo.svg";

export default function Header() {
  return (
    <header className="flex w-full justify-between items-center fixed top-0 left-0 p-[2rem]">
      <Link href="/">
        <Image
          className="w-56"
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
