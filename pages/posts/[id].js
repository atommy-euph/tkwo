import { getAllPostIds, getPostData } from "../../lib/posts";

import Link from "next/link";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Date from "../../components/Date";

import Head from "next/head";

export default function Post({ postData }) {
  return (
    <div className="container">
      <Head>
        <title>{postData.title} | The Keynote Wind Orchestra</title>
      </Head>
      <Header />
      <div className="main">
        <div className="article">
          <h1 className="mb-0">{postData.title}</h1>
          <Date dateString={postData.date} />
          <br />
          <div className="spacer-s"></div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
        <Link href="/" className="button mt-12 w-24">
          トップへ戻る
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  // Add the "await" keyword like this:
  const postData = await getPostData(params.id);

  return {
    props: {
      postData,
    },
  };
}
