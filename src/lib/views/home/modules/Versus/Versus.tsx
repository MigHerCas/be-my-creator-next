import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { SECTION_VERTICAL_SPACING, themeColors } from "@helpers/ui-values";
import type { FC } from "react";
import { Check, X } from "react-feather";
import { useInView } from "react-intersection-observer";

import styles from "./styles.module.css";

const leftSideItems = [
  "Affordable, monthly pricing",
  "Fast booking and delivery",
  "Flexible and scalable",
  "Quality vetted, experienced creators",
  "100% usage rights included",
  "Proprietary matching technology",
];

const rightSideItems = [
  "Expensive, marked-up pricing",
  "Long slow briefing and delivery",
  "Inflexible and slow to scale",
  "Find creators on ad-hoc project basis",
  "Usage rights variable and unclear",
  "Manual co-ordination process",
];

const Versus: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.8,
    triggerOnce: true,
  });

  return (
    <Box
      as="section"
      ref={ref}
      isolation="isolate"
      py={SECTION_VERTICAL_SPACING}
      className={inView ? styles.containerIsAnimated : undefined}
    >
      <Box textAlign="center" mb="50px">
        <Heading as="h2" size="md">
          Why join BeMyCreator?
        </Heading>
      </Box>

      <Flex
        justifyContent="center"
        alignItems="center"
        wrap="wrap"
        gap={["30px", null, null, "10px"]}
      >
        {/* Left side (BMC) */}
        <Box
          backgroundColor="white"
          zIndex="1"
          borderRadius="20px"
          pos="relative"
          overflow="hidden"
          className={styles.animatedBoxOurs}
        >
          <VStack
            as="ul"
            alignItems="flex-start"
            spacing={0}
            gap={4}
            p={["15px", "20px", "30px"]}
            backgroundColor="white"
          >
            {leftSideItems.map((itemText) => (
              <Flex key={itemText} as="li" alignItems="center" gap={4}>
                <Box
                  width={["20px", "24px"]}
                  p="4px"
                  borderRadius="full"
                  bgColor={themeColors.primary}
                >
                  <Check stroke="white" width="100%" height="100%" />
                </Box>
                <Text size={["sm", "md"]} mb="0">
                  {itemText}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
        <Box />

        {/* Right side (others) */}
        <Box
          borderRadius="20px"
          className={styles.animatedBoxOthers}
          backgroundColor="white"
          p="30px"
        >
          <Heading
            as="h3"
            size="sm"
            textIndent={["40px", null, "80px"]}
            mb="20px"
            opacity="0.6"
          >
            Others
          </Heading>
          <VStack
            as="ul"
            alignItems="flex-start"
            spacing={0}
            gap={4}
            opacity="0.8"
          >
            {rightSideItems.map((itemText) => (
              <Flex key={itemText} as="li" alignItems="center" gap={4}>
                <Box
                  width={["20px", "24px"]}
                  p="4px"
                  borderRadius="full"
                  bgColor="gray.300"
                >
                  <X stroke="white" width="100%" height="100%" />
                </Box>
                <Text mb="0" size={["sm", "md"]}>
                  {itemText}
                </Text>
              </Flex>
            ))}
          </VStack>
        </Box>
        <Box />
      </Flex>
    </Box>
  );
};
export default Versus;
