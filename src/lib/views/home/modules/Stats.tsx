import { Box, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { SECTION_VERTICAL_SPACING, themeColors } from "@helpers/ui-values";
import CountUp from "react-countup";
import { Clock, DollarSign, ThumbsUp } from "react-feather";
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
      icon: <DollarSign stroke={themeColors.pistache} />,
    },
    {
      startValue: 1,
      endValue: 28,
      leftSideOperator: "x",
      rightSideOperator: "",
      title: `Increase the "Add to cart" rate`,
      icon: <Clock stroke={themeColors.pistache} />,
    },
    {
      startValue: 1,
      endValue: 92,
      leftSideOperator: "",
      rightSideOperator: "%",
      title: "Of consumers trust peer recommendations",
      icon: <ThumbsUp stroke={themeColors.pistache} />,
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
            bgColor={themeColors.black}
            key={title}
            w={["260px", "280px", null, null, "320px"]}
          >
            <Box
              p={3}
              display="inline-block"
              bgColor={themeColors.darkGrey}
              borderRadius="full"
              mb={8}
            >
              {icon}
            </Box>
            {inView ? (
              <CountUp start={startValue} end={endValue} duration={2} delay={0}>
                {({ countUpRef }) => {
                  return (
                    <Heading size="lg" mb={2}>
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

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-20%",
    threshold: 0.2,
  });

  return (
    <Box
      as="section"
      ref={ref}
      alignItems="center"
      px={["30px", null, "60px"]}
      py={["50px", null, "60px"]}
      mb={SECTION_VERTICAL_SPACING}
      bgColor={themeColors.darkGrey}
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
        <Heading maxW="25ch" as="h2" mb={0}>
          Run ads using the creator&apos;s handle with{" "}
          <b style={{ color: themeColors.primary }}>BeMyCreator</b>
        </Heading>
        <CTA href="/new-project" variant="secondary" icon="plus" showDot>
          Find your creator
        </CTA>
      </Flex>
      <StatsItems inView={inView} />
    </Box>
  );
};

export default Stats;
