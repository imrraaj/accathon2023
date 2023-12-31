import {
  Heading,
  chakra,
  Flex,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Image,
  useColorModeValue,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";

export default function About() {
  return (
    <Box>
      <Heading>About the Event</Heading>
      <Box display={["block", "flex"]} gap={4} paddingBlock={8}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkfgHPfpkA5iwXB2_5uxGLC8tqslCPz0SfYd6X2t1wtyUc4GBwiFCydI6TgOz6V2R6nzQ"
          flex={1}
          // border={"8px"}
          // borderColor={["red", "green"]}
          maxW={["100%", "xl"]}
          borderRadius={"lg"}
          marginBottom={[8, 0]}
        />
        <Box flex={2} fontSize={"lg"}>
          <Flex
            boxShadow={"lg"}
            direction={{ base: "column-reverse", md: "row" }}
            width={"full"}
            rounded={"xl"}
            p={10}
            justifyContent={"space-between"}
            position={"relative"}
            bg={useColorModeValue("white", "purple.800")}
            _after={{
              content: '""',
              position: "absolute",
              height: "21px",
              width: "29px",
              left: "35px",
              top: "-10px",
              maxH: "120px",
              backgroundSize: "cover",
              backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
            }}
            _before={{
              content: '""',
              position: "absolute",
              height: "21px",
              width: "29px",
              right: "35px",
              transform: "rotate(180deg)",
              top: "-10px",
              maxH: "120px",
              backgroundSize: "cover",
              backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
            }}
          >
            <Flex
              direction={"column"}
              textAlign={"left"}
              justifyContent={"space-between"}
            >
              <chakra.p
                fontFamily={"Inter"}
                fontWeight={"semibold"}
                fontSize={"lg"}
              >
                There is no commerce without community. And there is no community without commerce
              </chakra.p>
              <chakra.span
                fontFamily={"Inter"}
                fontWeight={"semibold"}
                fontSize={"lg"}
              >
                - Michele Jennae
              </chakra.span>
            </Flex>
          </Flex>

          <Text paddingBlock={4} textAlign={"justify"}>
            Accathon is a nationwide initiative to provide students with a collaborative platform to solve some of the pressing interdisciplinary  problems the society and/or the industries face, and thus inculcate a culture of product innovation and a mindset of problem-solving. The event will help in promoting innovation, out-of-the-box thinking in young minds, especially undergraduate students from across India. Accathon is an excellent opportunity to foster innovation, collaboration, and creativity among students while promoting their technical and problem-solving skills. This event will also provide a platform for students to interact with industry professionals and potential employers.
          </Text>
        </Box>
      </Box>

      <Heading>Expected Outcomes of the Event</Heading>
      <Box marginBlock={8} paddingInline={[0, 8]} fontSize={"lg"}>
        <OrderedList>
          <ListItem paddingBlock={4}>
            <Text fontWeight={"bold"} fontSize={"xl"}>Innovative Solutions: </Text>
            It will result in the creation of innovative solutions to specific challenges related to taxation, cost accounting and financial statement analysis. Participants brainstorm and collaborate to develop novel ideas and approaches that address real-world problems.
          </ListItem>
          <ListItem paddingBlock={4}>
            <Text fontWeight={"bold"} fontSize={"xl"}>Networking and Collaboration: </Text>
            It will provide a platform for participants to network and collaborate with like-minded individuals. Participants often form new connections and partnerships that extend beyond the event.
          </ListItem>
          <ListItem paddingBlock={4}><Text fontWeight={"bold"} fontSize={"xl"}>Skill Development: </Text>
            Participants can enhance their technical, creative, and problem-solving skills through hands-on experience during the hackathon. </ListItem>
          <ListItem paddingBlock={4}><Text fontWeight={"bold"} fontSize={"xl"}>Start-ups and Ventures: </Text>
            Some hackathon projects evolve into start-up ventures. When participants identify a market need and develop a strong solution, they might decide to continue. </ListItem>
          <ListItem paddingBlock={4}><Text fontWeight={"bold"} fontSize={"xl"}>Employment Opportunities: </Text>
            Companies often sponsor hackathons to identify potential talent. Participants who excel during the event might be offered job or internship opportunities with these companies. </ListItem>
          <ListItem paddingBlock={4}><Text fontWeight={"bold"} fontSize={"xl"}>Cross-Disciplinary Collaboration: </Text>
            It will bring together individuals from diverse backgrounds, encouraging cross-disciplinary collaboration. This can lead to unique and holistic solutions to complex problems. </ListItem>
        </OrderedList>
        In summary, it will generate a range of outcomes, including innovative solutions, skill development, networking, learning opportunities, and potential entrepreneurial ventures.
      </Box>
    </Box>
  );
}
