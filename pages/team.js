import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, Container, Grid, GridItem, Heading } from "@chakra-ui/react";
import TeamCard from "../components/TeamCard";

export default function Home() {
  return (
    <>
      <Head>
        <title>Team - Accathon 2023 Hackathon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container maxW={"container.xl"} marginInline="auto">
        <Navbar />
        <Box marginBlock={16}>
          <Heading
            paddingBlock={8}
            textAlign={["center", "left"]}
            textDecoration="underline"
          >
            Meet Our Team
          </Heading>
          <Heading
            size={"lg"}
            color={"purple.400"}
            textAlign={["center", "left"]}
            paddingBlock={4}
          >
            Faculty Commitee
          </Heading>
          <Advisor />

          <Heading
            size={"lg"}
            color={"purple.400"}
            textAlign={["center", "left"]}
            paddingBlock={4}
          >
            Team Members
          </Heading>
          <Developers />
        </Box>
        <Footer />
      </Container>
    </>
  );
}


function Advisor() {
  const advisors = [
    {
      name: "Dr Udai Paliwal",
      designation: "Dean and Director, ICNU ",
      image: "/dr_rn_patel.jpg",
      linkedIn: "https://www.linkedin.com/in/rajesh-patel-b5144256/",
    },
    {
      name: "Prof Gopika Juneja",
      image: "/dr_madhuri_bhavsar.jpg",
      linkedIn: "https://www.linkedin.com/in/dr-madhuri-gujar-bhavsar-3bb61a6/",
    },
    {
      name: "Prof Gaurang Rawal",
      image: "/dr_yoon.jpg",
      linkedIn: "https://www.linkedin.com/in/sang-won-yoon-bb886722/",
    },
    {
      name: "Prof Jitendra Bhatia",
      image: "/priyank_thakkar.jpg",
      linkedIn: "https://www.linkedin.com/in/priyank-thakkar-4701689b/",
    },
    {
      name: "Representative, IAA",
      image: "/swati_jain.jpg",
      linkedIn: "https://www.linkedin.com/in/swati-jain-54845311/",
    },
  ];
  return (
    <Grid
      h="auto"
      templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={4}
      marginBottom={8}
    >
      {advisors.map((ad) => (
        <GridItem>
          <TeamCard
            url={ad.image}
            name={ad.name}
            description={ad.designation ?? "Advisor"}
            link={ad.linkedIn}
          />
        </GridItem>
      ))}
    </Grid>
  );
}

function Developers() {
  const developers = [
    {
      name: "Shruti Jain, ICNU",
      image: "/raj_patel.jpg",
      linkedIn: "https://www.linkedin.com/in/raj-k-patel21/",
    },
    {
      name: "Parth Sanghvi, ICNU",
      image: "/vishal_chaudhary.jpeg",
      linkedIn: "https://www.linkedin.com/in/vishal-chaudhary-95b2571a6",
    },
    {
      name: "Disha Tank, ICNU",
      image: "/kuldip_chaudhari.jpg",
      linkedIn: "https://www.linkedin.com/in/kuldip-chaudhari-726b651a3",
    },
    {
      name: "Gungun Gangwani, ICNU",
      image: "/dhairya_bakshi.jpg",
      linkedIn: "https://www.linkedin.com/in/dhairya-baxi-38908a1b9",
    },
    {
      name: "Raj Patel, ITNU",
      image: "/jay_patel.jpg",
      linkedIn: "https://www.linkedin.com/in/jay-patel-4005a8227",
    },
    {
      name: "Vikas Dhanani, ITNU",
      image: "kiran_kher.jpg",
      linkedIn: "https://www.linkedin.com/in/kiran-kher-a517b9225",
    },
    {
      name: "Dhairya Baxi, ITNU",
      image: "shubh_patel.jpg",
      linkedIn: "https://www.linkedin.com/in/shubh26/",
    }
  ];
  return (
    <Grid
      h="auto"
      templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={4}
      marginBottom={8}
    >
      {developers.map((dev) => (
        <GridItem>
          <TeamCard
            url={dev.image}
            name={dev.name}
            description={""}
            link={dev.linkedIn}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
