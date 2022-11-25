import Image from "next/image";
import zaki from "../images/zaki.jpg";
import taki from "../images/taki.jpeg";

export default function Conductors() {
  return (
    <div className="container">
      <main className="main">
        <Image src={zaki} />
        <Image src={taki} />
      </main>
    </div>
  );
}
