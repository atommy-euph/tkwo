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
        <meta
          property="og:title"
          content={`The Keynote Wind Orchestra について | The Keynote Wind Orchestra`}
        />
      </Head>
      <Header />
      <main className="main">
        <div className="article">
          <h1>The Keynote Wind Orchestra ― </h1>
          <p>
            The Keynote Wind Orchestra ― 通称「ざき吹」。
            楽団名には「一人ひとりが『Keynote』(大切な音)」という意味が込められています。
          </p>
          <p>
            The Keynote Wind Orchestra は、「ざきお」こと吉崎高士をはじめとする大阪大学吹奏楽団のOB・OGによって企画された吹奏楽団です。
          </p>
          <p>
            2023年の立ち上げ当初は運営スタッフの多くが4回生であり、来年度からそれぞれの道に別れて進んでいく時期に、最後の演奏会を開催したいとの思いから始まりました。
            第一回演奏会の楽団メンバーの多くは大阪大学吹奏楽団の現役生、OB・OGでした。しかし、それ以外にも色々な演奏会でのつながりがあり、70人を超える奏者に集まっていただきました。
          </p>
          <p>
            その後それぞれの道へ進み、一旦はばらばらになってしまいましたが、「今まで一緒に音楽をしてきた人たちとまた音楽をしたい!再集結したい」との思いから、
            当初一回きりと言っていたにも関わらず、第二回演奏会を行う運びとなりました。
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
