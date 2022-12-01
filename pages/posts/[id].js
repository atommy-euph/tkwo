import { getAllPostIds, getPostData } from "../../lib/posts";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Date from "../../components/Date";

export default function Post({ postData }) {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <div className="article">
          <h1>{postData.title}</h1>
          <br />
          <span>{postData.id}</span>
          <br />
          <Date dateString={postData.date} />
          <br />
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
