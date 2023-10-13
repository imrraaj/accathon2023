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
            Faculty Committee
          </Heading>
          <Advisor />

          <Heading
            size={"lg"}
            color={"purple.400"}
            textAlign={["center", "left"]}
            paddingBlock={4}
          >
            Student Committee
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
      image: "/udai_paliwal.jpeg",
      linkedIn: "https://www.linkedin.com/in/prof-udai-paliwal-55aa709a",
    },
    {
      name: "Prof Gopika Juneja",
      designation: "Assistant Professor, ICNU",
      image: "/gopika_juneja.jpeg",
      linkedIn: "https://www.linkedin.com/in/gopika-juneja-a6534b156/",
    },
    {
      name: "Prof Gaurang Rawal",
      designation: "Assistant Professor, ITNU",
      image: "/gaurang_raval.jpeg",
      linkedIn: "https://www.linkedin.com/in/gaurang-raval-919b0017",
    },
    {
      name: "Prof Jitendra Bhatia",
      designation: "Assistant Professor, ITNU",
      image: "/jitendra_bhatia.jpeg",
      linkedIn: "https://www.linkedin.com/in/jitendrabbhatia/",
    },
    {
      name: "Sanjay Bhayani",
      designation: "General Secretary, Indian Accounting Association",
      image: "/sanjay_bhayani.jpeg",
      linkedIn: "https://www.linkedin.com/in/sanjay-bhayani-505b901a0",
    },
  ];
  return (
    <Grid
      h="auto"
      templateRows={{ sm: "repeat(8, 1fr)", md: "repeat(1, 1fr)" }}
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={4}
      alignItems={'center'}
      justifyContent={"start"}
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
      name: "Shruti Jain",
      institute: "ICNU",
      image: "/raj_patel.jpg",
      linkedIn: "",
    },
    {
      name: "Parth Sanghvi",
      institute: "ICNU",
      image: "/vishal_chaudhary.jpeg",
      linkedIn: "https://www.linkedin.com/in/vishal-chaudhary-95b2571a6",
    },
    {
      name: "Disha Tank",
      institute: "ICNU",
      image: "/kuldip_chaudhari.jpg",
      linkedIn: "https://www.linkedin.com/in/kuldip-chaudhari-726b651a3",
    },
    {
      name: "Gungun Gangwani",
      institute: "ICNU",
      image: "/dhairya_bakshi.jpg",
      linkedIn: "https://www.linkedin.com/in/dhairya-baxi-38908a1b9",
    },
    {
      name: "Raj Patel",
      institute: "ITNU",
      image: "/jay_patel.jpg",
      linkedIn: "https://www.linkedin.com/in/raj-k-patel21/",
    },
    {
      name: "Vikas Dhanani",
      institute: "ITNU",
      image: "kiran_kher.jpg",
      linkedIn: "https://www.linkedin.com/in/kiran-kher-a517b9225",
    },
    {
      name: "Dhairya Baxi",
      institute: "ITNU",
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
            description={dev.institute}
            link={dev.linkedIn}
          />
        </GridItem>
      ))}
    </Grid>
  );
}
