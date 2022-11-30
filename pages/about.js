import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Conductors() {
  return (
    <div className="container">
      <main className="main">
        <Header />
        <div className="article">
          <h1>The Keynote Wind Orchestra ― </h1>
          <p>
            通称ざき吹。「ざきを」こと吉崎高士をはじめとする大阪大学吹奏楽団のOB・OGが中心となって企画する、1度限りの演奏会です。
          </p>
          <p>
            メンバーも大阪大学吹奏楽団のOB・OG・現役団員が中心ですが、他にも様々な楽団で活躍する奏者が集まりました。
          </p>
          <p>
            ひとり一人がKeynote(大切な音)という意味をこめて命名しました。音楽を愛する皆様ひとり一人の心に沁みわたる演奏をお届けします。
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
