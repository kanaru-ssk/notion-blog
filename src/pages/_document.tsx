import Document, { Html, Head, Main, NextScript } from "next/document";
import { defaultMetadata } from "@/constants/defaultMetadata";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" type="image/svg+xml" href={defaultMetadata.icon} />
          <meta name="theme-color" content={defaultMetadata.themeColor} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
