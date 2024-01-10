import "../styles/globals.css";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import NextNProgress from "nextjs-progressbar";
import CountDownTimer from "../components/Timer";
import { useEffect } from "react";
import Link from "next/link";
const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default function App({ Component, pageProps }) {
  const dateTimeForHackathon = new Date("01-24-2024 09:00:00");
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress color="#805AD5" />
      <Fonts />
      <Component {...pageProps} />
      <CountDownTimer targetDate={dateTimeForHackathon} />
    </ChakraProvider>
  );
}
