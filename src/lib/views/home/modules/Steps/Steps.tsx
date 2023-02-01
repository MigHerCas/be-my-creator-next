import { Box, Center, Flex, Heading, Text } from "@chakra-ui/react";
import { SECTION_VERTICAL_SPACING, themeColors } from "@helpers/ui-values";
import type { FC } from "react";
import { DownloadCloud, Tool, Zap } from "react-feather";

import styles from "./styles.module.css";

const Steps: FC = () => {
  const content = [
    {
      heading: "Choose the type of content for your brand",
      description: "Specify what kind of content your brand needs",
      icon: <Tool stroke={themeColors.pistache} />,
    },
    {
      heading: "Pick your Creators within our catalog",
      description:
        "In less than 3 days you will receive UGC creator's portfolios to choose",
      icon: <Zap stroke={themeColors.pistache} />,
    },
    {
      heading: "Boost Your Sales",
      description: "Our team will manage your Ads to convert more",
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
          alignItems={["center", null, null, "stretch"]}
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
