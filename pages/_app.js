import Script from "next/script";
import Head from "next/head";
import "../styles/globals.css";
import "../styles/article.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Keynote Wind Orchestra</title>
        <meta title="ざき吹 | The Keynote Wind Orchestra" />
        <head prefix="og:http://ogp.me/ns#" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="ざき吹 | The Keynote Wind Orchestra"
        />
        <meta
          property="og:description"
          content={"The Keynote Wind Orchestra の演奏会情報はコチラ"}
        />
        <meta property="og:image" content="" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Script id="typekit" type="application/javascript">
        {` (function(d) {
        var config = {
        kitId: 'bom5hyg',
        scriptTimeout: 3000,
        async: true
        },
        h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
     })(document);`}
      </Script>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
