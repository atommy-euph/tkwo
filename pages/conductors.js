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
          <h1 className="text-lightyellow">指揮者紹介</h1>
          <Image src={zaki} alt="yoshizaki takashi" />
          <div>
            <h2>吉崎高士</h2>
            <p>
              兵庫県出身。西宮市立西宮高校卒業、大阪大学基礎工学研究科に在学中。
            </p>
            <p>
              音楽との出会いは、幼稚園の時にギターを買ってもらったこと。中学生では吹奏楽部に入部し、打楽器を始める。中学・高校と学生指揮者を経験し、高校では吹奏楽コンクールでの指揮も経験した。また、趣味で作曲編曲を始める。
            </p>
            <p>
              大学では、大阪大学吹奏楽団に入団、正指揮者を務めた。卒団後はクラリネットフェスティバル2021、Euph & Tuba Carnival 2022、トロンボーンフェスティバル、Wind Ensemble 夢 等で指揮を務めるなど、幅広く活躍中。

            </p>
            <p>あだ名は「ざきお」。当演奏会の発起人。</p>
          </div>
          <div className="spacer-m"></div>
          <Image src={taki} alt="taki koji" />
          <div>
            <h2>瀧康二</h2>

            <p>
              静岡県出身。大阪府立春日丘高校・大阪大学理学部数学科卒業、大阪大学大学院情報科学研究科情報基礎数学専攻修了。
            </p>
            <p>
              13 歳からホルン、19歳で指揮を始める。大阪大学吹奏楽団で正指揮者を、Wind Ensenble 夢で5年間指揮を務める。その他に、関西学生メモリアルコンサート 2022 、Jacaranda吹奏楽団などで指揮を務める。2022年9月30日にはホルン奏者として、フルート奏者の永井樹奈氏とデュオ・リサイタルを企画・開催した。
            </p>

            <p>
              現在、お米企画ホルンパート、木管五重奏「農家の調べ」ホルン奏者。その他、大阪府を中心に指揮者やホルン奏者として演奏会に参加している。
            </p>
            <p>
              あだ名は「たっきー」。吉崎くんとは、大阪大学吹奏楽団の先輩後輩の関係である。
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
