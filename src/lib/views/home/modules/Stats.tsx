import { Box, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import type { FC } from "react";
import CountUp from "react-countup";
import { DollarSign, Clock, ThumbsUp } from "react-feather";
import { useInView } from "react-intersection-observer";

type StatItemContent = {
  icon: JSX.Element;
  title: string;
  startValue: number;
  endValue: number;
  leftSideOperator: string;
  rightSideOperator: string;
};

const StatsItems = ({ inView }: { inView: boolean }) => {
  const items = [
    {
      startValue: 1,
      endValue: 35,
      leftSideOperator: "+",
      rightSideOperator: "%",
      title: "Conversion rate",
      icon: <DollarSign stroke="#BCE500" />,
    },
    {
      startValue: 1,
      endValue: 11,
      leftSideOperator: "x",
      rightSideOperator: "",
      title: "Added time on site",
      icon: <Clock stroke="#BCE500" />,
    },
    {
      startValue: 1,
      endValue: 18,
      leftSideOperator: "+",
      rightSideOperator: "%",
      title: "Engagement rate",
      icon: <ThumbsUp stroke="#BCE500" />,
    },
  ] as Array<StatItemContent>;

  return (
    <Flex
      flexDir={["column", null, "row"]}
      justifyItems="center"
      justifyContent="center"
      alignItems={["center", null, "stretch"]}
      textAlign="center"
      gap="30px"
      wrap="wrap"
    >
      {items.map(
        ({
          startValue,
          endValue,
          leftSideOperator,
          rightSideOperator,
          icon,
          title,
        }) => (
          <GridItem
            p={["20px", "30px"]}
            borderRadius="24px"
            bgColor="#1B1B1B"
            key={title}
            w={["260px", "280px", null, null, "320px"]}
          >
            <Box
              p={3}
              display="inline-block"
              bgColor="#272727"
              borderRadius="full"
              mb={8}
            >
              {icon}
            </Box>
            {inView ? (
              <CountUp start={startValue} end={endValue} duration={2} delay={0}>
                {({ countUpRef }) => {
                  return (
                    <Heading size="lg" fontWeight={900} mb={2}>
                      {leftSideOperator}
                      <span ref={countUpRef} />
                      {rightSideOperator}
                    </Heading>
                  );
                }}
              </CountUp>
            ) : null}

            <Text size="md" mb={0}>
              {title}
            </Text>
          </GridItem>
        )
      )}
    </Flex>
  );
};
const Stats: FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-20%",
    threshold: 0,
  });

  return (
    <Box
      as="section"
      ref={ref}
      alignItems="center"
      px={["30px", null, "60px"]}
      py={["50px", null, "60px"]}
      bgColor="#272727"
      color="white"
      borderRadius={["0", null, "20px"]}
      mx={["-30px", null, "initial"]}
      textAlign={["center", null, null, "initial"]}
    >
      <Flex
        alignItems="center"
        flexDir={["column", null, null, "row"]}
        justifyContent={["center", null, null, "space-between"]}
        gap={6}
        mb="60px"
      >
        <Heading maxW="25ch" as="h2">
          Make the Most of Every Single Site Visit with{" "}
          <b style={{ color: "#00C4A2" }}>BeMyCreator</b>
        </Heading>
        <CTA href="/">Get started</CTA>
      </Flex>
      <StatsItems inView={inView} />
    </Box>
  );
};

export default Stats;
