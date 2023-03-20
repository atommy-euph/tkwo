import Image from "next/image";
import Link from "next/link";
import titleLogo from "../icons/title-logo.svg";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [1, 0.4, 0.4]);

  return (
    <motion.div
      style={{ opacity }}
      className="fixed top-0 w-full my-2 px-4 z-50"
    >
      <header className="flex w-full justify-between items-center fixed top-2 left-0 p-[2rem]">
        <Link href="/" className="w-3/5 max-w-[18rem]">
          <Image
            className="w-full"
            src={titleLogo}
            alt="the keynote wind orchestra"
          />
        </Link>
        <Link className="button mt-4" href="/posts/concert">
          詳細を見る
        </Link>
      </header>
    </motion.div>
  );
}
