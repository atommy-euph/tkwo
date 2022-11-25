import Image from "next/image";
import Head from "next/head";
import Link from "next/link";


import titleLogo from "../icons/title-logo.svg";

export default function Home() {
  return (
    <div className="py-0 ">
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
        <h1 className="font-tangier font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-gold via-lightyellow to-darkyellow">
          <Image src={titleLogo} />
        </h1>
        <div className="spacer-s">{/* spacer */}</div>
        <h2>キャッチコピー &rarr;</h2>
        <div className="spacer-m">{/* spacer */}</div>
        <div>
          <p>簡単にまとめる</p>
        </div>
        <div className="spacer-m">{/* spacer */}</div>
        <div className="grid">
          <a href="https://nextjs.org/docs" className="card">
            <h2>The Keynote Wind Orchestra について &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className="card">
            <h2>演奏会詳細 &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <Link href="/conductors" className="card">
            <h2>指揮者紹介 &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </Link>
        </div>
      </main>

      <footer className="footer">SNS icons</footer>
    </div>
  );
}
