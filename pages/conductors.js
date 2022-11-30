import Image from "next/image";
import zaki from "../images/zaki.jpg";
import taki from "../images/taki.jpeg";

import Header from "../components/Header";

export default function Conductors() {
  return (
    <div className="container">
      <main className="main article">
        <Header />
        <Image src={zaki} alt="yoshizaki takashi" />
        <div>
          <h2>吉崎高士</h2>
          <p>
            兵庫県出身。西宮市立西宮高校卒業、大阪大学基礎工学部電子物理学科に在学中。13歳から打楽器を始める。中学校、高校で学生指揮者を務め、高校では吹奏楽コンクールでの指揮も経験した。これまで、大阪大学吹奏楽団やクラリネットフェスティバル2021、Euph
            & Tuba Carnival 等で指揮を務める。
          </p>
        </div>
        <div className="spacer-m"></div>
        <Image src={taki} alt="taki koji" />
        <div>
          <h2>瀧康二</h2>
          <p>
            静岡県出身。大阪府立春日丘高校・大阪大学理学部数学科卒業、大阪大学大学院情報科学研究科情報基礎数学専攻在学中。13歳でホルン、大学で指揮を始め、大阪大学吹奏楽団、関西学生メモリアルコンサート2022等で指揮を務める。現在、Wind
            Ensemble 夢 指揮者、お米企画ホルンパート。
          </p>
        </div>
      </main>
    </div>
  );
}
