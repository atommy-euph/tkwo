import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";

import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <div className="bg-key-img bg-cover bg-right-bottom filter brightness-100 contrast-150">
        <div className="relative z-10">
          <div className="h-44"></div>
          <div className="px-10">
            <p className="piece">
              アルプスの詩 <span className="author">/ F.チェザリーニ</span>
            </p>
            <p className="piece">
              メトロポリス1927 <span className="author">/ P.グレイアム</span>
            </p>
            <p className="piece">
              マードックからの最後の手紙{" "}
              <span className="author">/ 樽屋雅徳</span>
            </p>
            <p className="font-kurobara text-sm mt-4">他2曲</p>
          </div>
          <div className="spacer-s"></div>
          <div className="px-10 font-kurobara">
            <p className="font-kurobara text-sm">
              <span className="text-xl font-kurobara">2023</span>年{" "}
              <span className="text-xl font-kurobara">3</span>月
              <span className="text-xl font-kurobara">26</span>日 (
              <span className="text-xl font-kurobara">日</span>)
            </p>
            <p className="font-kurobara mb-1">
              <span className="text-2xl font-kurobara">アゼリアホール</span>{" "}
              (池田市民文化会館)
            </p>
            <p className="font-kurobara">
              <span className="text-xs font-kurobara">[開場]</span> 18:00{" "}
              <span className="text-xs font-kurobara ml-1.5">[開演]</span> 18:30{" "}
            </p>
          </div>
          <div className="px-10 mt-4">
            <p className="font-kurobara">入場無料</p>
          </div>
          <div className="spacer-l"></div>

          <div className="spacer-s bg-gradient-to-b from-transparent to-bg"></div>
        </div>
      </div>
      <div className="container">
        <Header />
        <main className="main">
          <h2 className="font-kurobara text-2xl  text-darkyellow first-letter:text-2xl mb-5">
            Informations
          </h2>
          <div className="grid">
            <Link href="/about" className="card">
              <h2>The Keynote Wind Orchestra とは &rarr;</h2>
              <p>ひとり一人の音を大切に、心に沁み渡る演奏を。</p>
            </Link>
            <Link href="/details" className="card">
              <h2>演奏会詳細 &rarr;</h2>
              <p>全プログラム・会場へのアクセス・開場時間などはこちら。</p>
            </Link>
            <Link href="/conductors" className="card">
              <h2>指揮者紹介 &rarr;</h2>
              <p>当楽団の演奏を作り上げる指揮者２名を、皆様にご紹介します。</p>
            </Link>
          </div>
          <div className="spacer-m"></div>
          <h2 className="font-kurobara text-2xl text-darkyellow first-letter:text-2xl mb-5">
            News
          </h2>
          <p className="text-center">Coming Soon!</p>
        </main>
        <Footer />
      </div>
    </>
  );
}
