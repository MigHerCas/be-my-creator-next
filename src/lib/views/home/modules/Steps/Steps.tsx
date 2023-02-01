import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { SECTION_VERTICAL_SPACING, themeColors } from "@helpers/ui-values";
import type { FC } from "react";
import { DownloadCloud, Tool, Zap } from "react-feather";

import styles from "./styles.module.css";

const Steps: FC = () => {
  const sampleDescription =
    "Duis mollis, est non commodo luctus, nisi erat porttitor ligula";

  const content = [
    {
      heading: "Choose the type of content for your brand",
      description: sampleDescription,
      icon: <Tool stroke={themeColors.pistache} />,
    },
    {
      heading: "Specify length and format",
      description: sampleDescription,
      icon: <Zap stroke={themeColors.pistache} />,
    },
    {
      heading: "Get your content within 7 days!",
      description: sampleDescription,
      icon: <DownloadCloud stroke={themeColors.pistache} />,
    },
  ];
  return (
    <Box as="section" py={SECTION_VERTICAL_SPACING}>
      {/* Header */}
      <Center px="30px">
        <Heading
          as="h2"
          size="md"
          mb={["30px", "40px", null, "60px"]}
          textAlign="center"
        >
          How it works?
        </Heading>
      </Center>

      {/* Steps */}
      <Box pos="relative">
        <Flex
          as="ol"
          flexDir={["column", null, null, "row"]}
          alignItems="center"
          listStyleType="none"
          gap="30px"
          wrap="wrap"
        >
          {content.map(({ heading, description, icon }, index) => (
            <Box
              key={heading}
              flex="1"
              as="li"
              bgColor={themeColors.darkGrey}
              borderRadius="20px"
              p="30px"
              minW="260px"
              maxW="420px"
            >
              <Box
                p={4}
                display="flex"
                gap={4}
                bgColor={themeColors.black}
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
              <Text color={themeColors.ligthGrey}>{description}</Text>
            </Box>
          ))}
        </Flex>

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
      </Box>
    </Box>
  );
};

export default Steps;
