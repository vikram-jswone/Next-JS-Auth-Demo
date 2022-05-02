import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import NextNProgress from "nextjs-progressbar";

import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress color="#1E90FF"/>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
