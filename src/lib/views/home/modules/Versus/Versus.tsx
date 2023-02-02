import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import { SECTION_VERTICAL_SPACING, themeColors } from "@helpers/ui-values";
import type { FC } from "react";
import { Check, X } from "react-feather";
import { useInView } from "react-intersection-observer";

import styles from "./styles.module.css";

const leftSideItems = [
  "Control over creator’s insights",
  "Fast booking and delivery",
  "Flexible and scalable",
  "Gain access to quality vetted creators",
  "100% usage rights included",
];

const rightSideItems = [
  "Don’t have access to their accounts",
  "Long slow briefing and delivery",
  "Inflexible and slow to scale",
  "Don’t always deliver best quality",
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
            Influencers
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
