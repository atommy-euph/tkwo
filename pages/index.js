import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

import titleLogo from "../icons/title-logo.svg";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="container">
      <Head>

        <title>The Keynote Wind Orchestra</title>
        <meta title="ざき吹 | The Keynote Wind Orchestra" />
        <head prefix="og:http://ogp.me/ns#" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ざき吹 | The Keynote Wind Orchestra"
        />
        <meta
          property="og:description"
          content={"The Keynote Wind Orchestra の演奏会情報、奏者募集はコチラ"}
        />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <main className="main">
        <Header />
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
