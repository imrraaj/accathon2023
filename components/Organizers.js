import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Organizers() {
  return (
    <section>
      <Heading color={"purple.400"} marginBlock={"8"}>
        About Organizers
      </Heading>

      <Box>

        <Box marginTop={8} display={{ md: "flex" }} alignItems={"center"} gap={[16, 8]}>
          <Image
            src="/IAA.svg"
            alt="Nirma University Logo"
            flex="0.5"
            marginInline="auto"
            order={[1, 1]}
            display="block"
            width={["xl"]}
          ></Image>
          <Text
            flex="1.5"
            fontWeight="semibold"
            textAlign="justify"
            order={[2, 2]}
            marginBlock={[16, 0]}
          >
            The Indian Accounting Association is an interface between academicians, professional and practitioners from various universities, business, industry and government. The main function of IAA is to promote and disseminate the knowledge of accounting and the related subjects in India and abroad. Further, it aims to undertake and encourage research in the field of accounting. Ever since its inception, the IAA has served as an important forum for raising the status of accounting both as a discipline and as an important tool for managerial decision making.
            The Association was founded by academicians and professionals in accounting on March 15, 1969, and inaugurated on February 14, 1970 by the Accountant General of Uttar Pradesh. It is a member organization of the International Association of Accounting Education and Research (IAAER). It is also held in high esteem by American Accounting Association (AAA). At present, IAA has a network of 57 branches in India with more than 7300 life members, and a Research Foundation as an affiliate at Kolkata. It also brings out a biannual research journal 'Indian Journal of Accounting' in the months of June & December to give wider publicity to research findings. The Association also gives IAA Young Research Award and IAA fellowship. The Association offers Life Membership and Annual Membership for Individuals and Institutions through its chapters across India. Past conference have attracted a large number of delegates from across the country and abroad.


          </Text>
        </Box>



        <Box>
          <Box display={{ md: "flex" }} alignItems={"center"} gap={[16, 8]}>
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



          <Box marginTop={8} display={{ md: "flex" }} alignItems={"center"} gap={[16, 8]}>
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
              Nirma University, Ahmedabad, is a research-oriented, student-centric, multidisciplinary, not-for-profit state private university. The university received NAAC A+ grade in its third cycle of accreditation. It is also awarded the Centre of Excellence (CoE) status by the Government of Gujarat. The constituent institutes, departments and centres facilitate the all-round development of the students. The lush-green campus is well-equipped with state-of-the-art infrastructure to support academic, cultural, sports and other activities.

              Institute of Technology, established in 1995, is the flagship Institute of the Nirma University
              The Institute is recognised for robust academic programmes, quality teaching-learning process and fostering overall personality development in its students. A blend of young and experienced faculties, committed to teaching and research; have proven to be the best mentors to budding engineers.

            </Text>
          </Box>






        </Box>

      </Box>

    </section >
  );
}
