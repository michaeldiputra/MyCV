import Head from "next/head";
import { myTitle } from "../../config";

export default function about() {
  return (
    <div>
      <Head>
        <title>About | {myTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <a>Hello About</a>
    </div>
  );
}
