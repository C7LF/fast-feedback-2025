import "@/styles/globals.css";
import { AuthProvider } from "@/lib/auth";
import type { AppProps } from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { theme } from "@/styles/theme";
import React from "react";
import Head from "next/head";
import { Global, css } from "@emotion/react";

const GlobalStyle = ({ children }: any) => {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
          }
          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }
        `}
      />
      {children}
    </>
  );
};


const MyApp: React.FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
      <title>Fast Feedback</title>
    </Head>
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <GlobalStyle />
        <Component {...pageProps}></Component>
      </AuthProvider>
    </ChakraProvider>
    </>
  );
};

export default MyApp;
