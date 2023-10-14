import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export default function Organizers() {
  return (
    <section>
      <Heading color={"purple.400"} marginBlock={"8"}>
        About Organizers
      </Heading>

      <Box>

        <Box marginBlock={12} display={{ md: "flex" }} alignItems={"center"} gap={[16, 8]}>
          <Image
            src="/IAA.svg"
            alt="IAA Logo"
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

        <Box marginBlock={12} display={{ md: "flex" }} alignItems={"center"} gap={[16, 8]}>
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
            In the year 2003, the Government of Gujarat approved the proposal of the NERF to find the Nirma University, Ahmedabad. Hence, the Nirma University was established under a special Act passed by the Gujarat State Legislative Assembly. The University Grants Commission (UGC) duly recognised the University under Section 2 (f) of the UGC Act.
            Nirma University has established itself as a premier institute of higher learning in India, attracting students from all over the country and abroad. The university offers a range of undergraduate, postgraduate, and doctoral programs, with a strong emphasis on experiential learning, research, and industry collaborations.


          </Text>
        </Box>



        <Box>
          <Box marginBlock={12} display={{ md: "flex" }} alignItems={"center"} gap={[16, 8]}>
            <Image
              src="/itnu_logo.jpg"
              alt="Institute of Technology, Nirma University Logo"
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
              Institute of Technology, established in 1995, is the flagship Institute of the Nirma University
              The Institute is recognised for robust academic programmes, quality teaching-learning process and fostering overall personality development in its students. A blend of young and experienced faculties, committed to teaching and research; have proven to be the best mentors to budding engineers.

              <Text fontSize={"lg"} textDecor={"underline"} marginBlock={4} marginBottom={2}>Department of Computer Science and Engineering</Text>
              The Department of Computer Science and Engineering (CSE) endeavours to meet the challenges of changing technology and Industry 5.0. The Department is equipped with talented pool of faculty members, meritorious students and state of the art infrastructure. In addition to basic computing facilities, the Department has established advanced laboratories housing high end workstations, NVIDIA Volta and Pascal GPU systems, CISCO networking equipment, IoT devices, HCI devices and specialised software for cyber security and forensics. Centre of Excellence in Data Science is also established in the Department in association with the State University of New York (SUNY) at Binghamton, US since 2019.
              The Center for Excellence that focuses on Data Science is an excellent example of collaboration between faculty at Nirma and Binghamton. Working together, experts from both campuses are addressing problems that are critical to both nations, India and the USA. In addition to faculty exchange and student mobility, this Center serves as a catalyst for the continued development of new knowledge. It can, for example, have a positive impact on national priorities in India, such as the Digital India initiative and the delivery of services to people in Gujarat and beyond.

            </Text>
          </Box>












        </Box>



        <Box>
          <Box marginBlock={12} display={{ md: "flex" }} alignItems={"center"} gap={[16, 8]}>
            <Image
              src="/icnu_logo.png"
              alt="Institute of Commerce, Nirma University Logo"
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
              Established in 2016, the Institute of Commerce symbolises the principles of brilliance, excellence and professionalism. It imparts top-class education in the fields of Accounting as well as Banking, Financial Services and Insurance (BFSI). The Institute believes in serious academic pursuit by means of a prudent mix of relevance and rigour in its curriculum design and delivery to impart relevant skills, knowledge and ideas through intellectually stimulating debates and discussions, innovative teaching pedagogies and exposure to relevant industry practice at all levels. The campus infrastructure and amenities are comparable to any reputed university around the world. It hosts fully equipped classrooms where focused discussions, interactive study sessions, role plays, presentations, case studies, and practical sessions are held.
            </Text>
          </Box>












        </Box>






















      </Box>

    </section >
  );
}
