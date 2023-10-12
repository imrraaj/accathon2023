import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Partners() {
  return (
    <Box marginBlock={16} id="partners">
      <Heading marginBlock={"8"}>Partners</Heading>
      <Grid
        h="auto"
        templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={4}
      >
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href={"https://technology.nirmauni.ac.in/"} target="_blank">
            <Image src="/Nirma_logo.jpg" width={56} />
          </Link>
        </GridItem>
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href={"https://commerce.nirmauni.ac.in/"} target="_blank">
            <Image src="/GMC_Logo.png" width={32} />
          </Link>
        </GridItem>
        <GridItem
          cursor={"pointer"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Link href={"https://indianaccounting.org/"} target="_blank">
            <Image src="/IAA.svg" width={48} />
          </Link>
        </GridItem>
      </Grid>
    </Box>
  );
}
