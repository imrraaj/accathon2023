import NoSSR from "./NoSSR";

function FaqsClientSideRendered() {
  return (
    <NoSSR>
      <Faqs />
    </NoSSR>
  );
}

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";

export default function Faqs() {
  const [hydrated, setHydrated] = React.useState(false);
  React.useEffect(() => {
    setHydrated(true);
  }, []);
  if (!hydrated) {
    return null;
  }

  const FAQS = [
    {
      category: "General",
      questions: [
        {
          q: "What is Accathon? ",
          a: "Accathon is a nationwide competition to provide students with a collaborative platform to solve some of the pressing interdisciplinary problems the society and/or the industries face, and thus inculcate a culture of product innovation and a mindset of problem-solving.",
        },
        {
          q: "Why should I participate in Accathon?",
          type: "HTML",
          a: `Hackathon has plenty of benefits: 
          <ol style="margin-left:12px;">
            <li>
              The Accathon will challenge participants to think outside the box and develop innovative solutions to real-world problems.
            </li>
            
            <li>
              Participants will have the opportunity to work on cutting-edge technologies and tools, honing their technical prowess.
            </li>

            <li>
              The event will be organized in teams, promoting collaboration, communication, and networking among participants.
            </li>
          </ol>`,
        },
        {
          q: "Is this Hackathon online or offline?",
          a: "First Round  will be an online round while the second (Final)  Round  will be an offline round at the Nirma University Campus.",
        },
      ],
    },
    {
      category: "Eligibility",
      questions: [
        {
          q: "Who can participate in this event?",
          a: "All the Undergraduate students of Universities/Colleges across India are eligible to participate. Each team is required to consist of 4 members, with at least 2 students from commerce/management stream.",
        },
        {
          q: "I am working at a company. Am I eligible to participate in the event?",
          a: "Although this event is for students only, you can act as a mentor of a team based on your domain expertise.",
        },
        {
          q: "I am a faculty member associated with an academic institute. Am I eligible to participate in the event?",
          a: "Although this event is for students only, you as a faculty member can act as a mentor of a team based on your domain expertise.",
        },
        {
          q: "Do I need to register for participating in this event?",
          a: "Yes it is compulsory for the  team to register and participate in the event.The team leader has to register the team.",
        },
        {
          q: "What is the registration fee?",
          a: "The registration fees shall be 500/- rupees only, for one team to register and participate in the event.",
        },
        {
          q: "Is this event limited to students of Gujarat only?",
          a: "No, the event is open for all the undergraduate students of Universities/Colleges across India.",
        },
        {
          q: "Can I register for more than one tracks?",
          a: "No, one team can register only for a single track.",
        },
        {
          q: "What is the procedure to cancel the registration?",
          a: "If you feel that you will not be able to participate in the event after registering, just drop an email at gopikajuneja@nirmauni.ac.in stating the same.",
        },
        {
          q: "Will we get refund if we cancel our participation?",
          a: "No, fee once paid is non refundable even if you cancel your participation.",
        },
      ],
    },
    {
      category: "Team Formation",
      questions: [
        {
          q: "Should I have a team formed prior to registration?",
          a: "Yes, it is mandatory.",
        },
        {
          q: "What should be the team size?",
          a: "Each team is required to consist of 4 members.",
        },
        {
          q: "Only students that belong to same College/University can form a team?",
          a: "Yes, the team should belong to same College/University but the students can be from different Institutes/Departments /Branches under same management, with at least 2 students from commerce/management stream.",
        },
        {
          q: "Can I be part of two teams?",
          a: "No, you can be member of one team only. ",
        },
      ],
    },
    {
      category: "Prizes",
      questions: [
        {
          q: "What is the prize money?",
          type: "HTML",
          a: `
            For each theme the prizes are as under:
            <li>1st Prize: Rs. 15,000</li>
            <li>2nd Prize: Rs.10,000</li>`,
        },
        {
          q: "Is there any track specific prize money?",
          a: "Yes, there would be winners for each theme.",
        },
        {
          q: "Will there be any perks offered to me for participating in the event?",
          a: "Apart from the prizes to be awarded to the winners, there will be no other perks/incentives. However, participants brainstorm and collaborate to develop novel ideas and approaches that address real-world problems.",
        },
        {
          q: "Will I get any certificate of participation?",
          a: "Yes, e-certificates will be issued to all active participants of the event who submit and present their solution for the first round. Those present at Final Round will get print certificates.",
        },
        {
          q: "Will the submission entries be scrutinized?",
          a: "No, there is no scrutiny. All entries will directly be able to work on the problem definitions as long as they follow the eligibility criteria.",
        },
      ],
    },
    {
      category: "No Query?",
      questions: [
        {
          q: "My query is not listed in this FAQs section. What should I do?",
          type: "HTML",
          a: 'Please write to us at <a href="mailto:gopikajuneja@nirmauni.ac.in" style="border-bottom:2px solid black;"> gopikajuneja@nirmauni.ac.in',
        },
      ],
    },
  ];
  return (
    <NoSSR>
      <Box marginBlock={16}>
        <Heading marginBlock={"8"}>Have A Question?</Heading>
        <Accordion allowMultiple>
          {FAQS.map((item) => {
            return (
              <Box marginBlock={8} key={item.category}>
                <Heading size={"md"} marginBlock={4} color={"purple.400"}>
                  {item.category}
                </Heading>

                {item.questions.map((questions) => {
                  return (
                    <AccordionItem key={questions.q} paddingBlock={2}>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <Text fontWeight={"bold"}>{questions.q}</Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>

                      {questions?.type == "HTML" ? (
                        <AccordionPanel
                          pb={4}
                          dangerouslySetInnerHTML={{ __html: questions.a }}
                        ></AccordionPanel>
                      ) : (
                        <AccordionPanel pb={4}>{questions.a}</AccordionPanel>
                      )}
                    </AccordionItem>
                  );
                })}
              </Box>
            );
          })}
        </Accordion>
      </Box>
    </NoSSR>
  );
}
