import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";

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
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
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
