import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="My notes of Tech" />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5b85d5" />
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <body>
        <Main />
        <div id="portal" />
        <NextScript />
      </body>
    </Html>
  );
}
