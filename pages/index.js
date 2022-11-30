import Image from "next/image";
import Link from "next/link";

import Header from "../components/Header";

import key from "../images/key.jpg";
import zaki from "../images/zaki.jpg";

export default function Home() {
  return (
    <div className="container">
      <Header />

      <main className="main">
        <Image src={key} alt="back ground key image" />
        <div className="spacer-m">{/* spacer */}</div>
        <div>
          <p>簡単にまとめる</p>
        </div>
        <div className="spacer-m">{/* spacer */}</div>
        <div className="grid">
          <Link href="/about" className="card">
            <h2>The Keynote Wind Orchestra とは &rarr;</h2>
            <p>ひとり一人の音を大切に、心に沁み渡る演奏を。</p>
          </Link>
          <Link href="/details" className="card">
            <h2>演奏会詳細 &rarr;</h2>
            <p>詳しい会場へのアクセス・開場時間などはこちら。</p>
          </Link>
          <Link href="/conductors" className="card">
            <h2>指揮者紹介 &rarr;</h2>
            <p>当楽団の頼れる指揮者２名をご紹介します。</p>
          </Link>
        </div>
      </main>
    </div>
  );
}
