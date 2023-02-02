import { Heading, Grid, GridItem, Flex, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { SECTION_VERTICAL_SPACING } from "@helpers/ui-values";
import CatchyBanner from "@views/home/modules/CatchyBanner";
import HeroPlayer from "@views/home/modules/Hero/HeroPlayer";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <Grid
      as="section"
      templateColumns="repeat(12, 1fr)"
      alignItems="center"
      rowGap={["30px", null, "40px"]}
      py={SECTION_VERTICAL_SPACING}
      mb="60px"
    >
      {/* Left side */}
      <GridItem
        colStart={1}
        colEnd={[-1, null, null, 8]}
        textAlign={["center", null, null, "initial"]}
        px={["30px", null, null, null, "60px"]}
      >
        <CatchyBanner />
        <Heading
          as="h1"
          size="lg"
          maxW={["20ch", null, "30ch"]}
          mt={["auto", null, 10]}
          mx={["auto", null, null, 0]}
        >
          Boost your sales with UGC creators
        </Heading>
        <Text
          maxW={["25ch", "30ch", null, "40ch"]}
          mb={8}
          mx={["auto", null, null, 0]}
        >
          Empowering creators, elevating brands
        </Text>

        <Flex
          alignItems="center"
          justifyContent={["center", null, null, "flex-start"]}
          gap={4}
          wrap="wrap"
        >
          <CTA href="/new-project" variant="secondary" icon="plus" showDot>
            Find your creator
          </CTA>
          <CTA href="/new-call" variant="primary" icon="arrow">
            Book a call with us
          </CTA>
        </Flex>
      </GridItem>

      {/* Right side */}
      <GridItem colStart={[1, null, null, 8]} colEnd={-1}>
        <HeroPlayer source="https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/videos/629a1b846dd7d3528640ea03_How%20To%20Example%20Home-transcode%20(1).mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC92aWRlb3MvNjI5YTFiODQ2ZGQ3ZDM1Mjg2NDBlYTAzX0hvdyBUbyBFeGFtcGxlIEhvbWUtdHJhbnNjb2RlICgxKS5tcDQiLCJpYXQiOjE2NzQ2MzIwMDcsImV4cCI6MTY3NTIzNjgwN30.FWggb_PrjieXhiZpVdKKl8jN0FEaOgcw9qKLbpCQZ2o&t=2023-01-25T07%3A33%3A27.540Z" />
      </GridItem>
    </Grid>
  );
};

export default Hero;
