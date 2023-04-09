import { Html, Head, Main, NextScript } from "next/document";
import { createPortal } from "react-dom";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id="modal"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
