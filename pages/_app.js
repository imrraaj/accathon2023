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
  const dateTimeForHackathon = new Date("01-06-2024 09:00:00");
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress color="#805AD5" />
      <Fonts />
      <Text align="center" py="4" bgColor="purple.100" fontWeight={"semibold"}>
        <marquee>
          Participate in the Hackathon and win attractive cash prizes. <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Hurry up! <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          Registration closes on 26<sup>th</sup> December, 2023.
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>

          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdRMfQ5Q_s8QbddWujAl52rTbueJMoHotJL0cOEhv-wzBEYgw/viewform?usp=sf_link"
          >
            <Text as={"span"} px={3} py={1} borderRadius={"full"} color={"purple.100"} bgColor={"purple.900"}>
              Register here
            </Text>
          </Link>
        </marquee>
      </Text>
      <Component {...pageProps} />
      <CountDownTimer targetDate={dateTimeForHackathon} />
    </ChakraProvider>
  );
}
