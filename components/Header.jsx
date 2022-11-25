import Image from "next/image";
import titleLogo from "../icons/title-logo.svg";

export default function Header() {
  return (
    <>
      <Image src={titleLogo} />
      <div className="spacer-s">{/* spacer */}</div>
      <h2>キャッチコピー &rarr;</h2>
    </>
  );
}
