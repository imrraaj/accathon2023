import { Box, Heading, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, purple.400, purple.600)"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={"purple.500"} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        colorScheme="purple"
        bgGradient="linear(to-r, purple.400, purple.500, purple.600)"
        color="white"
        variant="solid"
      >
        <Link href="/">Go to Home</Link>
      </Button>
    </Box>
  );
}
