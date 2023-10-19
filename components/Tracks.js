import {
  Box,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  Image,
} from "@chakra-ui/react";

export default function Tracks() {
  return (
    <Box marginBlock={16} id="tracks">
      <Heading marginBlock={"8"}>Major themes</Heading>
      <Grid
        gridAutoRows="1fr"
        templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
        gap={4}
        boxShadow="2xl"
      >
        <GridItem p="4">
          <TrackCard
            imageUrl="https://image.lexica.art/full_jpg/0d585bf4-aa92-4864-8ea6-20f2a17a6e70"
            trackName="Taxation"
          />
        </GridItem>
        <GridItem p="4">
          <TrackCard
            imageUrl="https://image.lexica.art/full_jpg/58e2902c-29dd-49ce-9149-3c4975b9d468"
            trackName="Financial analysis of companies which are not listed"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}

function TrackCard({ imageUrl, trackName }) {
  return (
    <Card
      boxShadow="base"
      position="relative"
      borderRadius="md"
      overflow="hidden"
    >
      <Image src={imageUrl}></Image>
      <CardBody
        width="full"
        position="absolute"
        bottom="0"
        py="2.5"
        color="white"
        boxShadow="inset 0 0 1000px black"
      >
        {trackName}
      </CardBody>
    </Card>
  );
}
