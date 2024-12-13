import Link from "next/link";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";
import ReleaseDate from "../components/ReleaseDate";
import { parseISO } from "date-fns";


export default function Conductors({ allPostsData }) {
  const [display, setDisplay] = useState(10);
  const [sorted, setSorted] = useState("latest");
  const [sortedPostsData, setSortedPostsData] = useState(allPostsData);
  const [currentPage, setCurrentPage] = useState(1);


  const totalPage = Math.ceil(allPostsData.length / display);


  useEffect(() => {
    const start = display * (currentPage - 1);
    const end = start + display;
    setSortedPostsData(
      allPostsData
        .sort((a, b) => {
          if (sorted === "latest") {
            return parseISO(b.date) - parseISO(a.date);
          } else if (sorted === "oldest") {
            return parseISO(a.date) - parseISO(b.date);
          }
        })
        .slice(start, end)
    );
  }, [sorted, currentPage, display]);

  const handleNext = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  }
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }



  return (
    <div className="container">
      <Head>
        <title>News | The Keynote Wind Orchestra</title>
        <meta
          property="og:title"
          content={`News | The Keynote Wind Orchestra`}
        />
      </Head>
      <Header />
      <main className="main">
        <div className="spacer-s"></div>
        <h1 className="font-kurobara text-4xl text-lightyellow mb-2">News </h1>
        <div className="text-sm flex space-x-2 mb-8">
          <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
            <option value="latest">最新順</option>
            <option value="oldest">古い順</option>
          </select>
          <select value={display} onChange={(e) => setDisplay(e.target.value)}>
            <option value="10">10件ずつ表示</option>
            <option value="30">30件ずつ表示</option>
            <option value="100">100件ずつ表示</option>
          </select>
        </div>

        <ul className="mt-5">
          {sortedPostsData.filter(post => parseISO(post.date) < new Date()).map(
            ({ id, date, title }) => (
              <li className="mb-3" key={id}>
                <Link
                  href={`/posts/${id}`}
                  className="underline underline-offset-2 decoration-dotted hover:decoration-solid hover:text-lightyellow"
                >
                  {title}
                </Link>
                <br />
                <ReleaseDate dateString={date} />
              </li>
            )
          )}
        </ul>
        <div className="spacer-s"></div>
        <div className="flex space-x-3 text-xs underline text-lightyellow">
          <button onClick={() => handlePrev()}>前へ</button>
          <div className="flex space-x-1">
            {[...Array(totalPage)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`inline-block w-4 ${currentPage === i + 1 ? "bg-lightyellow text-black" : "text-lightyellow"}`}
              >
                {i + 1}
              </button>
            ))}

          </div>
          <button onClick={() => handleNext()}>次へ</button>
        </div>
        <div className="spacer-m"></div>
        <Link href="/" className="button w-24 mt-12">
          トップへ戻る
        </Link>
      </main>

      <Footer />
    </div >
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
