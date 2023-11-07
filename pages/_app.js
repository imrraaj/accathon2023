import "../styles/globals.css";
import { ChakraProvider, Text } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Fonts from "../components/Fonts";
import NextNProgress from "nextjs-progressbar";
import CountDownTimer from "../components/Timer";
import { useEffect } from "react";
const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default function App({ Component, pageProps }) {
  const dateTimeForHackathon = new Date("11-09-2023 09:00:00");
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress color="#805AD5" />
      <Fonts />
      <Text align="center" py="4" bgColor="purple.100">
        <p className="flash">
          <b>Registration closes on 26<sup>th</sup> December, 2023</b>
        </p>
      </Text>
      <Component {...pageProps} />
      <CountDownTimer targetDate={dateTimeForHackathon} />
    </ChakraProvider>
  );
}
