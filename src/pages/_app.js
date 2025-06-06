import Head from "next/head";
import "@/styles/globals.css";
import Layout from "../components/layout";
import { baseUrl } from "../../config";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name="google-site-verification" content="TqScQ-Tf6aP245TJCdkloiwWR-7eGqdidM8lP6VDpWU" />
        <meta name="description" content="Welcome to My personal website.👋🏼" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Profesional Portfolio | michael.ray();" />
        <meta property="og:description" content="Welcome to My personal website.👋🏼" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:image" content={`${baseUrl}/default-image.jpg`} />
        <meta property="og:site_name" content="Profesional Portfolio | michael.ray();" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Profesional Portfolio | michael.ray();" />
        <meta name="twitter:description" content="Welcome to My personal website.👋🏼" />
        <meta name="twitter:image" content={`${baseUrl}/default-image.jpg`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
};