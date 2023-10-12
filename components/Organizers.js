import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Organizers() {
  return (
    <section>
      <Heading color={"purple.400"} marginBlock={"8"}>
        About Organizers
      </Heading>

      <Box>

        <Box>
          <Box display={{ md: "flex" }} gap={[16, 8]}>
            <Image
              src="/icnu_logo.png"
              alt="Institute of Commerce, Nirma University Logo"
              flex="1"
              marginInline="auto"
              order={[1, 1]}
              display="block"
              width={["7xl", 36]}
            ></Image>
            <Text
              flex="1.5"
              fontWeight="semibold"
              textAlign="justify"
              order={[2, 2]}
              marginBlock={[16, 0]}
            >
              Established in 2016, the Institute of Commerce symbolises the principles of brilliance, excellence and professionalism. It imparts top-class education in the fields of Accounting as well as Banking, Financial Services and Insurance (BFSI). The Institute believes in serious academic pursuit by means of a prudent mix of relevance and rigour in its curriculum design and delivery to impart relevant skills, knowledge and ideas through intellectually stimulating debates and discussions, innovative teaching pedagogies and exposure to relevant industry practice at all levels. The campus infrastructure and amenities are comparable to any reputed university around the world. It hosts fully equipped classrooms where focused discussions, interactive study sessions, role plays, presentations, case studies, and practical sessions are held.
            </Text>
          </Box>



          <Box marginTop={8} display={{ md: "flex" }} gap={[16, 8]}>
            <Image
              src="/Nirma_logo.jpg"
              alt="Nirma University Logo"
              flex="1"
              marginInline="auto"
              order={[2, 2]}
              display="block"
              width={["7xl", 36]}
            ></Image>
            <Text
              flex="1.5"
              fontWeight="semibold"
              textAlign="justify"
              order={[1, 1]}
              marginBlock={[16, 0]}
            >
              Nirma University, Ahmedabad is a research-oriented, student-centric,
              multidisciplinary, not-for-profit state private university. Within a
              short period of its existence, it has emerged as a nationally
              renowned higher education institution. The University and its
              constituent institutes are highly ranked by different ranking
              agencies. Institute of Technology, Nirma University is the first
              self-financed engineering college of the State of Gujarat.
              Department of Computer Science and Engineering (CSE), ITNU is known
              for its strength in Theoretical Computer Science, Image Processing
              and Computer Vision, High Performance Computing, Artificial
              Intelligence and Deep Learning, Internet of Things, Data Science,
              Cloud Computing, Networking and Cyber Security. We at the Department
              of Computer Science and Engineering, Institute of Technology, Nirma
              University have established the Centre of Excellence in Data Science
              (CoE - DS) in collaboration with SUNY Binghamton University, USA in
              2020.
            </Text>
          </Box>
        </Box>

      </Box>

    </section >
  );
}
