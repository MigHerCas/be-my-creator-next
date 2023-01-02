import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { DownloadCloud, Tool, Zap } from "react-feather";

import styles from "./styles.module.css";

const Steps: FC = () => {
  return (
    <Box
      as="section"
      mt={[0, 0, "-30px", "-60px", null, "-60px"]}
      pos="relative"
    >
      <Flex
        as="ol"
        flexDir={["column", null, null, "row"]}
        alignItems="center"
        listStyleType="none"
        gap="30px"
        wrap="wrap"
      >
        <Box
          flex="1"
          bgColor="#272727"
          borderRadius="20px"
          p="30px"
          minW="260px"
          maxW="420px"
        >
          <Box
            p={4}
            display="flex"
            gap={2}
            bgColor="#1C1C1C"
            borderRadius="full"
            mb={6}
            width="fit-content"
          >
            <Tool stroke="#BCE500" />
            <Heading size="xs" color="white" mb={0}>
              Step 1
            </Heading>
          </Box>
          <Heading size="sm" color="white">
            Build your project
          </Heading>
          <Text color="hsla(0, 0%, 100%, 0.5)">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula
          </Text>
        </Box>
        <Box
          flex="1"
          bgColor="#272727"
          borderRadius="20px"
          p="30px"
          minW="260px"
          maxW="420px"
        >
          <Box
            p={4}
            display="flex"
            gap={2}
            bgColor="#1C1C1C"
            borderRadius="full"
            mb={6}
            width="fit-content"
          >
            <Zap stroke="#BCE500" />
            <Heading size="xs" color="white" mb={0}>
              Step 2
            </Heading>
          </Box>

          <Heading size="sm" color="white">
            Match with creators
          </Heading>
          <Text color="hsla(0, 0%, 100%, 0.5)">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula
          </Text>
        </Box>
        <Box
          flex="1"
          bgColor="#272727"
          borderRadius="20px"
          p="30px"
          minW="260px"
          maxW="420px"
        >
          <Box
            p={4}
            display="flex"
            gap={2}
            bgColor="#1C1C1C"
            borderRadius="full"
            mb={6}
            width="fit-content"
          >
            <DownloadCloud stroke="#BCE500" />

            <Heading size="xs" color="white" mb={0}>
              Step 3
            </Heading>
          </Box>

          <Heading size="sm" color="white">
            Get your content!
          </Heading>
          <Text color="hsla(0, 0%, 100%, 0.5)">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula
          </Text>
        </Box>
      </Flex>

      {/* Inside line */}
      <Box
        pos="absolute"
        className={styles.animatedGradient}
        top={[0, null, null, "50%"]}
        left={["50%", null, null, "0"]}
        transform={["translateX(-50%)", null, null, "translateY(-50%)"]}
        h={["100%", null, null, "50%"]}
        w={["200px", null, null, "100%"]}
        zIndex="-1"
      />
    </Box>
  );
};

export default Steps;
