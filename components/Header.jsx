import Image from "next/image";
import Link from "next/link";
import titleLogo from "../icons/title-logo.svg";

export default function Header() {
  return (
    <>
      <Link href="/" className="flex justify-left">
        <Image
          className="w-44 fixed top-[2rem] left-[2rem]"
          src={titleLogo}
          alt="the keynote wind orchestra"
        />
      </Link>
    </>
  );
}
