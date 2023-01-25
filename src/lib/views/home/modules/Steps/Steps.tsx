import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { DownloadCloud, Tool, Zap } from "react-feather";

import styles from "./styles.module.css";

const Steps: FC = () => {
  const sampleDescription =
    "Duis mollis, est non commodo luctus, nisi erat porttitor ligula";

  const content = [
    {
      heading: "Build your project",
      description: sampleDescription,
      icon: <Tool stroke="#BCE500" />,
    },
    {
      heading: "Match with creators",
      description: sampleDescription,
      icon: <Zap stroke="#BCE500" />,
    },
    {
      heading: "Get your content!",
      description: sampleDescription,
      icon: <DownloadCloud stroke="#BCE500" />,
    },
  ];
  return (
    <Box as="section" py={["30px", null, "40px", null, "60px"]}>
      {/* Header */}
      <Center px="30px">
        <Heading
          as="h2"
          size="md"
          mb={["30px", "40px", null, "60px"]}
          textAlign="center"
        >
          Create your first campaign for free
        </Heading>
      </Center>

      {/* Steps */}
      <Flex
        as="ol"
        flexDir={["column", null, null, "row"]}
        alignItems="center"
        listStyleType="none"
        pos="relative"
        gap="30px"
        wrap="wrap"
      >
        {content.map(({ heading, description, icon }, index) => (
          <Box
            key={heading}
            flex="1"
            as="li"
            bgColor="#272727"
            borderRadius="20px"
            p="30px"
            minW="260px"
            maxW="420px"
          >
            <Box
              p={4}
              display="flex"
              gap={4}
              bgColor="#1C1C1C"
              borderRadius="full"
              mb={6}
              width="fit-content"
            >
              {icon}
              <Heading size="xs" as="h3" color="white" mb={0}>
                Step {index + 1}
              </Heading>
            </Box>
            <Heading size="sm" color="white">
              {heading}
            </Heading>
            <Text color="hsla(0, 0%, 100%, 0.5)">{description}</Text>
          </Box>
        ))}

        {/* Animated gradient */}
        <Box
          pos="absolute"
          className={styles.animatedGradient}
          top={["30px", null, "40px", "50%"]}
          bottom={["30px", null, "40px", "50%"]}
          left={["50%", null, null, "0"]}
          transform={["translateX(-50%)", null, null, "translateY(-50%)"]}
          h={["auto", null, null, "50%"]}
          w={["200px", null, null, "100%"]}
          zIndex="-1"
        />
      </Flex>
    </Box>
  );
};

export default Steps;
