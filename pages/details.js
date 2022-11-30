import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Conductors() {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <div className="article">
          <h1>コンサート情報 ー</h1>
          <h2>The Keynote Wind Orchestra</h2>
          <p>
            <strong>日程</strong> 2023 年 3 月 26 日 (⽇)
          </p>
          <p>
            <strong>開場</strong> 18:00
          </p>
          <p>
            <strong>開演</strong> 18:30
          </p>
          <p className="text-green-400 border inline-block px-4 py-2 border-green-400 mt-2">
            入場無料
          </p>
          <h2>会場</h2>
          <p>池田市民文化会館アゼリアホール</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3275.8629346530197!2d135.43895351523508!3d34.809390080406665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f09a8f7202b3%3A0x5ec7cc529cbfd6e2!2z5rGg55Sw5biC5rCR5paH5YyW5Lya6aSo77yI44Ki44K844Oq44Ki44Ob44O844Or77yJ!5e0!3m2!1sja!2sjp!4v1669810679555!5m2!1sja!2sjp"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <h2>曲目</h2>
          <h3>第１部</h3>
          <ul>
            <li>A New Arrival ～新しき人へ / 河邊一彦</li>
            <li>マードックからの最後の手紙 / 樽屋雅徳</li>
            <li>メトロポリス1927 / P.グレイアム</li>
          </ul>
          <h3>第２部</h3>
          <ul>
            <li>「ポカホンタス」より / A.メンケン (宍倉晃 編)</li>
            <li>アルプスの詩 / F.チェザリーニ</li>
          </ul>
          <h2>指揮</h2>
          <p>吉崎高士 & 瀧康二</p>
          <Link className="" href="/conductors">
            指揮者紹介を見る
          </Link>
          <h2>お問い合わせ</h2>
          <p>
            ご不明な点がございましたら、以下のアドレスまでお気軽にご連絡ください。
          </p>
          <a href="mailto:thekeynotewo@gmailcom">thekeynotewo@gmail.com</a>
        </div>
      </main>
      <Footer />
    </div>
  );
}
