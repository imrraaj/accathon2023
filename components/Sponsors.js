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

export default function Sponsors({ title = "Our Sponsor" }) {
  return (
    <Box marginBlock={16} id="sponsors">
      <Heading marginBlock={"8"}>{title}</Heading>
      <Grid
        h="min-content"
        templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
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
          <Image src="/acca.png" />
          {/* </Link> */}
        </GridItem>
        <GridItem
          cursor={"pointer"}
          border={2}
          borderColor={"purple"}
        >
          <Text fontWeight={"semibold"} textAlign="justify">
            ACCA is the world's most forward-thinking professional accountancy body. ACCA (the Association of Chartered Certified Accountants), is a globally recognised professional accountancy body providing qualifications and advancing standards in accountancy worldwide.

            Founded in 1904 to widen access to the accountancy profession, ACCA has long championed inclusion and today proudly support a diverse community of over 247,000 members and 526,000 future members in 181 countries.

            ACCA’s forward-looking qualifications, continuous learning and insights are respected and valued by employers in every sector. They equip individuals with the business and finance expertise and ethical judgment to create, protect, and report the sustainable value delivered by organisations and economies.

            Guided by their purpose and values, their vision is to develop the accountancy profession the world needs. Partnering with policymakers, standard setters, the donor community, educators and other accountancy bodies, ACCA is strengthening and building a profession that drives a sustainable future for all.
          </Text>
        </GridItem>
      </Grid>
    </Box>
  );
}
