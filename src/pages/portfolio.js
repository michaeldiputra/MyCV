import Head from "next/head";
import { myTitle } from "../../config";

export default function portfolio() {
  return (
    <div>
      <Head>
        <title>Portfolio | {myTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <a>Hello Portfolio</a>
    </div>
  );
}
