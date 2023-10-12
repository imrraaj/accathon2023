import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

export default function Prizes() {
  return (
    <>
      <Box>
        <Heading textAlign={["center", "start"]}>
          Grand Prizes
        </Heading>
        <Grid
          h="auto"
          templateRows={{ sm: "repeat(2, 1fr)", md: "repeat(1, 1fr)" }}
          templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={4}
          marginBlock={8}
        >
          <GridItem>
            <PrizeCard
              imgUrl={"/gold.svg"}
              money={15000}
              text={"1st Prize"}
              order={1}
            />
          </GridItem>
          <GridItem>
            <PrizeCard
              imgUrl={"/silver.svg"}
              money={10000}
              text={"2nd Prize"}
              order={2}
            />
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

function PrizeCard({ imgUrl, money, text, mgtop }) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={4}
      justifyContent={"center"}
      alignItems={"center"}
      boxShadow={"2xl"}
      paddingBlock={8}
      borderRadius={"lg"}
      marginTop={[0, mgtop]}
      _hover={{ bgColor: "purple.50" }}
      cursor={"pointer"}
    >
      <Image src={imgUrl}></Image>
      <Heading fontSize={"4xl"}>₹{money}</Heading>
      <Text fontSize={"2xl"} fontWeight={"black"}>
        {text}
      </Text>
    </Box>
  );
}
