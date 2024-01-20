import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CheckboxIcon,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,

  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

export default function Schedule() {
  return (
    <Box>
      <Heading marginBlock={8}>Schedule</Heading>
      <Tabs isFitted variant="enclosed">
        <TabList mb="1em">
          <Tab
            fontSize={["sm", "xl"]}
            color={"purple.400"}
            fontWeight={"bold"}
            border={"2px"}
          >
            24<sup>th</sup>January - Day 1
          </Tab>
          <Tab
            fontSize={["sm", "xl"]}
            color={"purple.400"}
            fontWeight={"bold"}
            border={"2px"}
          >
            25<sup>th</sup>January - Day 2
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text fontWeight={"semibold"}>
              <TableContainer>
                <Table size='md'>
                  <Tbody>
                    <Tr>
                      <Td>9:30 am - 10:30 am</Td>
                      <Td>Reporting & Breakfast</Td>
                    </Tr>
                    <Tr>
                      <Td>10:30 am - 1:00 pm</Td>
                      <Td>Development Session</Td>
                    </Tr>
                    <Tr>
                      <Td>1:00 pm -1:45 pm</Td>
                      <Td>Lunch</Td>
                    </Tr>
                    <Tr>
                      <Td>1:45 pm - 8:00 pm</Td>
                      <Td>Development Session Continues</Td>
                    </Tr>
                    <Tr>
                      <Td>8:00 pm - 9:00 pm</Td>
                      <Td>Dinner</Td>
                    </Tr>
                    <Tr>
                      <Td>9:00 pm - 9:00 am <br />(25th January) </Td>
                      <Td>Development Session Continues</Td>
                    </Tr>

                  </Tbody>
                </Table>
              </TableContainer>
            </Text>
          </TabPanel>


          <TabPanel>
            <Text fontWeight={"semibold"}>
              <TableContainer>
                <Table size='md'>
                  <Tbody>
                    <Tr>
                      <Td>9:00 am - 9:30 am</Td>
                      <Td>Breakfast</Td>
                    </Tr>
                    <Tr>
                      <Td>9:30 am - 11:00 am</Td>
                      <Td>Development Session Continues</Td>
                    </Tr>
                    <Tr>
                      <Td>11:00 am - 2:00 pm</Td>
                      <Td>Presentation &Evaluation Session</Td>
                    </Tr>
                    <Tr>
                      <Td>2:00 pm - 3:00 pm</Td>
                      <Td>Lunch</Td>
                    </Tr>
                    <Tr>
                      <Td>3:00 pm - 5:00 pm</Td>
                      <Td>Prize Distribution</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </TableContainer>
            </Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
