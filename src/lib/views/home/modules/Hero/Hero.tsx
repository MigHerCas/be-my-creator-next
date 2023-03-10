import { Heading, Grid, GridItem, Flex, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { SECTION_VERTICAL_SPACING } from "@helpers/ui-values";
import { Routes } from "@routes";
import CatchyBanner from "@views/home/modules/CatchyBanner";
import HeroPlayer from "@views/home/modules/Hero/HeroPlayer";

const Hero = () => {
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
          <CTA href={Routes.newProject} variant="secondary" icon="plus" showDot>
            Find your creator
          </CTA>
          <CTA href={Routes.strategyCall} variant="primary" icon="arrow">
            Free Strategy Call
          </CTA>
        </Flex>
      </GridItem>

      {/* Right side */}
      <GridItem colStart={[1, null, null, 8]} colEnd={-1}>
        <HeroPlayer source="https://xudvhxwolsxldijaphhq.supabase.co/storage/v1/object/sign/main-bucket/videos/629a1cc464c6711d28c1743e_Lifestyle%20Example%20Home-transcode.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJtYWluLWJ1Y2tldC92aWRlb3MvNjI5YTFjYzQ2NGM2NzExZDI4YzE3NDNlX0xpZmVzdHlsZSBFeGFtcGxlIEhvbWUtdHJhbnNjb2RlLm1wNCIsInRyYW5zZm9ybWF0aW9ucyI6IiIsImlhdCI6MTY3MzI2Mzk5NywiZXhwIjoxOTg4NjIzOTk3fQ.I2ZdO-uModdapk62ihAcfRWIL9Rge9FOYZ3pMPR-K-M&t=2023-01-09T11%3A33%3A17.352Z" />
      </GridItem>
    </Grid>
  );
};

export default Hero;
