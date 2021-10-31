import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import theme from "styles/theme";

// https://mui.com/styles/advanced/#next-js

const structuredData = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  name: "Desarrollador de Software",
  datePosted: "2020/01/01",
  title: "Ingeniero de Software",
  industry: "Desarrollo de Software",
  description: "",
  employmentType: "Part-time",
  baseSalary: "1000",
  validThrough: "2020/01/07",
  jobLocation: {
    "@type": "Place",
    name: "Ungga Inmobiliaria",
    email: "info@ungga.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chacabuco 1565",
      addressLocality: "Buenos Aires",
      addressRegion: "CABA",
      postalCode: "B1066",
    },
  },
  hiringOrganization: {
    "@type": "Organization",
    name: "Ungga Inmobiliaria",
    email: "info@ungga.com",
  },
};
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&display=swap"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// https://github.com/vercel/next.js/blob/master/examples/with-styled-components/pages/_document.js
MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </React.Fragment>
      ),
    };
  } finally {
    sheet.seal();
  }
};
