import Image from "next/image";
import Link from "next/link";
import titleLogo from "../icons/title-logo.svg";

import { motion, useScroll, useTransform } from "framer-motion";
import redLine from "../images/2nd/red-line.svg";
import second from "../images/2nd/2nd.svg";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0.4, 0.4]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-0 w-full my-2 px-4 z-10"
    >
      <header className="flex w-full justify-between items-center fixed top-2 left-0 p-[2rem] pt-10">
        <div className="absolute right-0 top-0 w-full">
          <div className="absolute top-[0.5rem] right-[4rem] rotate-[30deg] w-[3.5rem] z-10">
            <Image src={second} className="w-full" alt="" />
          </div>
          <div className="absolute top-0 rotate-[30deg] right-[-3rem] w-96 z-0">
            <Image src={redLine} className="w-full" alt="" />
          </div>
        </div>
        <Link href="/" className="w-3/5 max-w-[18rem]">
          <Image
            className="w-full"
            src={titleLogo}
            alt="the keynote wind orchestra"
          />
        </Link>
        <Link className="button mt-4" href="/posts/2025_concert">
          演奏会詳細
        </Link>
      </header>
    </motion.div>
  );
}
