import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";

import { AppContextProvider } from "utils/context";

import { MaterialUI } from "components";

import theme from "styles/theme";
import "../styles/globals.css";

library.add(fab);
library.add(fas);

export default function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  return (
    <>
      <Head>
        <title>Next App</title>
        <link href="/favicon.ico" rel="icon" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="description" content="Ungga" />
        <meta property="og:title" content="Ungga" />
        <meta property="og:description" content="Ungga" />
        <meta property="og:url" content="https://ungga.com/" />
        <meta property="og:type" content="website" />
        <link rel="apple-touch-icon" href="/img/Ungga.svg" />
        <link rel="icon" href="/img/Ungga.svg" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider>
          {[
            "/login",
            "/signin",
            "/signup",
            "/signout",
            "/password-reset",
          ].includes(route) === false && <MaterialUI.TopBar />}
          <Component {...pageProps} />
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
}
