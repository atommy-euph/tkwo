import Image from "next/image";
import Link from "next/link";
import zaki from "../images/zaki.jpg";
import taki from "../images/taki.jpeg";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Head from "next/head";

export default function Conductors() {
  return (
    <div className="container">
      <Head>
        <title>指揮者紹介 | The Keynote Wind Orchestra</title>
        <meta
          property="og:title"
          content={`指揮者紹介 | The Keynote Wind Orchestra`}
        />
      </Head>
      <Header />
      <main className="main">
        <div className="article">
          <h1>指揮者紹介　ー </h1>
          <Image src={zaki} alt="yoshizaki takashi" />
          <div>
            <h2>吉崎高士</h2>
            <p>
              兵庫県出身。西宮市立西宮高校卒業、大阪大学基礎工学部電子物理学科に在学中。
            </p>
            <p>
              音楽との出会いは、幼稚園の時にギターを買ってもらったこと。中学生では吹奏楽部に入部し、打楽器を始める。中学・高校と学生指揮者を経験し、高校では吹奏楽コンクールでの指揮も経験した。
            </p>
            <p>
              また、趣味で作曲編曲を始める。大学では、大阪大学吹奏楽団に入団、正指揮者を務めた。卒団後はクラリネットフェスティバル2021、Euph
              & Tuba Carnival
              2022、トロンボーンフェスティバル等で指揮を務めるなど、幅広く活躍中。
            </p>
            <p>あだ名は「ざきお」。当演奏会の発起人。</p>
          </div>
          <div className="spacer-m"></div>
          <Image src={taki} alt="taki koji" />
          <div>
            <h2>瀧康二</h2>
            <p>
              静岡県出身。大阪府立春日丘高校・大阪大学理学部数学科卒業、大阪大学大学院情報科学研究科情報基礎数学専攻に在学中。
            </p>
            <p>
              13歳からホルンを始める。元大阪大学吹奏楽団。当楽団のもう一人の指揮者である吉崎の一つ上の学年で正指揮者を務め、これまで、Wind
              Ensemble 夢、関西学生メモリアルコンサート
              2022、Jacaranda吹奏楽団で指揮を務めた。中学校の指導にも一部携わる。
            </p>
            <p>
              昨年9月30日にはホルン奏者として、フルート奏者の永井樹奈氏と有料のデュオリサイタルを企画・開催した。
            </p>
            <p>
              現在、Wind Ensemble 夢
              指揮者、お米企画ホルンパートを主軸に、北摂地域を中心に指揮者やホルン奏者として演奏会に参加している。
            </p>
          </div>
        </div>
        <Link href="/" className="button w-24 mt-12">
          トップへ戻る
        </Link>
      </main>

      <Footer />
    </div>
  );
}
