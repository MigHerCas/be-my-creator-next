import { Box, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { useOnScreen } from "@hooks";
import type { FC } from "react";
import { useRef } from "react";
import CountUp from "react-countup";
import { DollarSign } from "react-feather";

const Stats: FC = () => {
  const visibleRef = useRef<HTMLDivElement>(null);

  const onScreen: boolean = useOnScreen<HTMLDivElement>(visibleRef, "-20%");

  return (
    <Box
      as="section"
      ref={visibleRef}
      alignItems="center"
      p="60px"
      bgColor="gray.100"
      borderRadius="20px"
      textAlign={["center", null, null, "initial"]}
    >
      <Flex
        alignItems="center"
        justifyContent={["center", null, null, "space-between"]}
        gap={6}
        mb="60px"
        wrap="wrap"
      >
        <Heading maxW="25ch">
          Make the Most of Every Single Site Visit with{" "}
          <b style={{ color: "#00C4A2", display: "block" }}>BeMyCreator</b>
        </Heading>
        <CTA href="/">Get started</CTA>
      </Flex>
      <Flex
        flexDir={["column", null, null, "row"]}
        justifyItems="center"
        justifyContent="center"
        alignItems={["center", null, null, "stretch"]}
        textAlign="center"
        gap="30px"
        wrap="wrap"
      >
        <GridItem
          p="30px"
          borderRadius="24px"
          border="2px solid"
          borderColor="gray.300"
          bgColor="gray.100"
          w="360px"
        >
          <Box
            p={2}
            display="inline-block"
            bgColor="gray.300"
            borderRadius="full"
            mb={8}
          >
            <DollarSign />
          </Box>
          {onScreen ? (
            <CountUp start={1} end={35} duration={1}>
              {({ countUpRef }) => (
                <Heading size="lg" fontWeight={900} mb={2}>
                  +<span ref={countUpRef} />%
                </Heading>
              )}
            </CountUp>
          ) : null}

          <Text size="md" mb={0}>
            Conversion rate
          </Text>
        </GridItem>
        <GridItem
          p="30px"
          borderRadius="24px"
          border="2px solid"
          borderColor="gray.300"
          bgColor="gray.100"
          w="360px"
        >
          <Box
            p={2}
            display="inline-block"
            bgColor="gray.300"
            borderRadius="full"
            mb={8}
          >
            <DollarSign />
          </Box>

          {onScreen ? (
            <CountUp start={1} end={11} duration={1}>
              {({ countUpRef }) => (
                <Heading size="lg" fontWeight={900} mb={2}>
                  x<span ref={countUpRef} />
                </Heading>
              )}
            </CountUp>
          ) : null}

          <Text size="md" mb={0}>
            Added time on site
          </Text>
        </GridItem>
        <GridItem
          p="30px"
          borderRadius="24px"
          border="2px solid"
          borderColor="gray.300"
          bgColor="gray.100"
          w="360px"
        >
          <Box
            p={2}
            display="inline-block"
            bgColor="gray.300"
            borderRadius="full"
            mb={8}
          >
            <DollarSign />
          </Box>
          {onScreen ? (
            <CountUp start={1} end={18} duration={1}>
              {({ countUpRef }) => (
                <Heading size="lg" fontWeight={900} mb={2}>
                  +<span ref={countUpRef} />%
                </Heading>
              )}
            </CountUp>
          ) : null}

          <Text size="md" mb={0}>
            Engagement rate
          </Text>
        </GridItem>
      </Flex>
    </Box>
  );
};

export default Stats;