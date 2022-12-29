import { Box, Flex, Heading, Text, VStack } from "@chakra-ui/react";
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
      py={["10px", "20px", null, "60px"]}
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
        gap={[8, 10, null, "10px"]}
      >
        {/* Left side (BMC) */}
        <Box
          backgroundColor="white"
          zIndex="1"
          borderRadius="20px"
          position="relative"
          overflow="hidden"
          className={styles.animatedBoxOurs}
          boxShadow="rgba(0, 0, 0, 0.25) 0px 25px 50px -12px"
        >
          <VStack
            as="ul"
            alignItems="flex-start"
            spacing={0}
            gap={4}
            p={["15px", "20px", "30px", "40px"]}
            backgroundColor="white"
          >
            {leftSideItems.map((itemText) => (
              <Flex as="li" alignItems="center" gap={4}>
                <Box
                  width={["20px", "24px"]}
                  padding="4px"
                  borderRadius="full"
                  bgColor="#00C4A2"
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
        <Box borderRadius="20px" className={styles.animatedBoxOthers}>
          <Heading as="h3" size="sm" ml="80px" mb={0} opacity="0.6">
            Others
          </Heading>
          <VStack
            as="ul"
            alignItems="flex-start"
            spacing={0}
            gap={4}
            p={["20px", null, "30px", "20px 40px"]}
            backgroundColor="white"
            opacity="0.8"
          >
            {rightSideItems.map((itemText) => (
              <Flex as="li" alignItems="center" gap={4}>
                <Box
                  width={["20px", "24px"]}
                  padding="4px"
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
