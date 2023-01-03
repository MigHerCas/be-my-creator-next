import { Heading, Grid, GridItem, Flex, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import VideoModal from "@components/modal/VideoModal";
import VideoPlayer from "@components/video/VideoPlayer";
import CatchyBanner from "@compositions/CatchyBanner";
import type { FC } from "react";

const Hero: FC = () => {
  return (
    <Grid
      as="section"
      templateColumns="repeat(12, 1fr)"
      alignItems="center"
      rowGap={10}
      py="40px"
    >
      {/* Left side */}
      <GridItem
        colStart={1}
        colEnd={[-1, null, null, 8]}
        textAlign={["center", null, null, "initial"]}
        p={[0, null, "60px"]}
      >
        <CatchyBanner />
        <Heading
          size={["md", null, "lg"]}
          maxW={["20ch", null, "30ch"]}
          mt={["auto", null, 10]}
          mx={["auto", null, null, 0]}
        >
          Instantly connect with UGC creators
        </Heading>
        <Text
          maxW={["25ch", "30ch", null, "40ch"]}
          mb={8}
          mx={["auto", null, null, 0]}
        >
          We make it easy for you to source and display quality user-generated
          content videos
        </Text>

        <Flex
          alignItems="center"
          justifyContent={["center", null, null, "flex-start"]}
          gap={4}
          wrap="wrap"
        >
          <CTA href="/demo" variant="secondary" icon="plus">
            Start a project
          </CTA>
          <CTA href="/" variant="primary" icon="arrow">
            Book a call with us
          </CTA>
        </Flex>
      </GridItem>

      {/* Right side */}
      <GridItem colStart={[1, null, null, 8]} colEnd={-1}>
        <Flex
          backgroundColor="gray.300"
          borderRadius="20px"
          minH="600px"
          maxW="400px"
          ml="auto"
          mr={["auto", null, null, 0]}
          alignItems="center"
          justifyContent="center"
        >
          <VideoModal>
            <VideoPlayer />
          </VideoModal>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default Hero;
