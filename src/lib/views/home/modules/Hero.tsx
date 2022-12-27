import {
  Heading,
  Grid,
  GridItem,
  Flex,
  Text,
  HStack,
  Tag,
} from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import VideoModal from "@components/modal/VideoModal";
import VideoPlayer from "@components/video/VideoPlayer";
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
      <GridItem
        colStart={1}
        colEnd={[-1, null, null, 7]}
        textAlign={["center", null, null, "initial"]}
      >
        <HStack
          spacing={4}
          mb={4}
          justifyContent={["center", null, null, "initial"]}
        >
          <Tag
            size="lg"
            key="tag1"
            variant="solid"
            bgColor="#fff"
            color="#000"
            border="1px solid #eaeaeb"
          >
            Videos from $10
          </Tag>
          <Tag
            size="lg"
            key="tag2"
            variant="solid"
            bgColor="#fff"
            color="#000"
            border="1px solid #eaeaeb"
          >
            Campaigns from $200
          </Tag>
        </HStack>
        <Heading size="lg">Instantly connect with UGC creators</Heading>
        <Text maxW="40ch" mb={8} mx={["auto", null, null, 0]}>
          Lorem ipsum dolor sit ame consectetur adipiscing suspendisse varius
          enim in
        </Text>
        <CTA
          href="/"
          customStyles={{
            m: ["auto", null, null, 0],
          }}
        >
          Book a call with us
        </CTA>
      </GridItem>
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
