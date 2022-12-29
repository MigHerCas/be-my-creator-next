import { Box, Flex, GridItem, Heading, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import type { FC } from "react";
import CountUp from "react-countup";
import { DollarSign, Clock, ThumbsUp } from "react-feather";
import { useInView } from "react-intersection-observer";

type StatItemContent = {
  countupElement: JSX.Element;
  icon: JSX.Element;
  title: string;
};

const StatsItems = ({ inView }: { inView: boolean }) => {
  const items = [
    {
      countupElement: (
        <CountUp start={1} end={35} duration={2}>
          {({ countUpRef }) => (
            <Heading size="lg" fontWeight={900} mb={2}>
              +<span ref={countUpRef} />%
            </Heading>
          )}
        </CountUp>
      ),
      title: "Conversion rate",
      icon: <DollarSign />,
    },
    {
      countupElement: (
        <CountUp start={1} end={11} duration={2}>
          {({ countUpRef }) => (
            <Heading size="lg" fontWeight={900} mb={2}>
              x<span ref={countUpRef} />
            </Heading>
          )}
        </CountUp>
      ),
      title: "Added time on site",
      icon: <Clock />,
    },
    {
      countupElement: (
        <CountUp start={1} end={18} duration={2}>
          {({ countUpRef }) => (
            <Heading size="lg" fontWeight={900} mb={2}>
              +<span ref={countUpRef} />%
            </Heading>
          )}
        </CountUp>
      ),
      title: "Engagement rate",
      icon: <ThumbsUp />,
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
      {items.map(({ countupElement, icon, title }) => (
        <GridItem
          p={["20px", "30px"]}
          borderRadius="24px"
          bgColor="#1B1B1B"
          key={title}
          w={["260px", "280px", null, null, "320px"]}
        >
          <>
            <Box
              p={3}
              display="inline-block"
              bgColor="#272727"
              borderRadius="full"
              mb={8}
            >
              {icon}
            </Box>
            {inView ? countupElement : null}

            <Text size="md" mb={0}>
              {title}
            </Text>
          </>
        </GridItem>
      ))}
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
