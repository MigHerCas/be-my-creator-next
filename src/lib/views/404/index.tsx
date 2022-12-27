import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  useColorMode,
  Flex,
} from "@chakra-ui/react";
import MotionBox from "@components/motion/Box";
import { NextSeo } from "next-seo";
import Link from "next/link";
import type { FC } from "react";

const Page404View: FC = () => {
  const { colorMode } = useColorMode();

  return (
    <Flex minHeight="60vh" direction="column" justifyContent="center">
      <NextSeo title="404 Not Found" />
      <MotionBox
        animate={{ y: 20 }}
        transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
        width={{ base: "100%", sm: "70%", md: "50%" }}
        margin="0 auto"
      >
        <Image
          src="/404 Error-pana.svg"
          alt="Error 404 not found Illustration"
        />
      </MotionBox>
      <Box marginY={4}>
        <Heading textAlign="center" size="lg">
          Page not Found.
        </Heading>

        <Box textAlign="center" marginTop={4}>
          <Text fontSize="sm" color="gray">
            It&apos;s Okay!
          </Text>
          <Button
            as={Link}
            href="/"
            backgroundColor={colorMode === "light" ? "gray.300" : "teal.500"}
            size="sm"
          >
            Let&apos;s Head Back
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};

export default Page404View;
