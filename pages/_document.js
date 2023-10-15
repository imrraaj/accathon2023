import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="accathon 2023 Hackathon is organised by Nirma University"
        />
        <link rel="shortcut icon" href="/logo.jpg" />
        <meta
          property="og:image"
          content="https://www.accathon.tech/logo.jpg"
        ></meta>
        <meta property="og:title" content="accathon 2023 Hackathon"></meta>
        <meta
          property="og:description"
          content="accathon 2023 Hackathon is organised by Nirma University"
        ></meta>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="accathon 2023 Hackathon" />
        <meta
          name="twitter:description"
          content="accathon 2023 Hackathon is organised by Nirma University"
        />
        <meta
          name="twitter:image"
          content="https://www.accathon.tech/logo.jpg"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
