import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";

import Head from "next/head";

export default function Conductors() {
  return (
    <div className="container">
      <Head>
        <title>
          The Keynote Wind Orchestra について | The Keynote Wind Orchestra
        </title>
      </Head>
      <Header />
      <main className="main">
        <div className="article">
          <h1>The Keynote Wind Orchestra ― </h1>
          <p>
            The Keynote Wind Orchestra ― 通称「ざき吹」。
            楽団名には「一人ひとりが『Keynote』(大切な音)」という意味が込められている。
          </p>
          <p>
            本演奏会は、「ざきお」こと吉崎高士をはじめとする大阪大学吹奏楽団のOB・OGによって企画された、一度きりの演奏会である。運営スタッフの多くが4回生であり、来年度からそれぞれの道に別れて進んでいくこの時期に、最後の演奏会を開催したいとの思いから始まった。楽団メンバーの多くは大阪大学吹奏楽団の現役生、OB・OGだ。しかし、それ以外にも色々な演奏会でのつながりがあり、70人を超える奏者が集まった。
          </p>
          <p>
            年度末という節目の時期に開催する本演奏会には、来年度から環境が変わり、様々な道に進んでいく人もいる。だからこそ、全員が一つの音楽に向き合って音楽を作り上げることの素晴らしさを全身で感じながら、心に染み渡る音楽を観客の皆様へお届けしたい。
          </p>
        </div>
        <Link href="/" className="button mt-12 w-24">
          トップへ戻る
        </Link>
      </main>
      <Footer />
    </div>
  );
}
