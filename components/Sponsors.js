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

export default function Sponsors() {
  return (
    <Box marginBlock={16} id="sponsors">
      <Heading marginBlock={"8"}>Our Sponsor</Heading>
      <Grid
        h="min-content"
        templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
        gap={4}
        justifyContent="center"
        alignItems="center"
      >
        <GridItem
          cursor={"pointer"}
          border={2}
          borderColor={"purple"}
        >

          {/* <Link href={"https://cactusglobal.com/"} target="_blank"> */}
          <Image src="/acca.jpg" />
          {/* </Link> */}
        </GridItem>
      </Grid>
    </Box>
  );
}
