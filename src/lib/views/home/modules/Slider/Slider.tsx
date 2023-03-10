import { Box, Center, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { SECTION_VERTICAL_SPACING } from "@helpers/ui-values";
import { Routes } from "@routes";
import dynamic from "next/dynamic";
import { useState } from "react";

import SliderCard from "./SliderCard";
import { SOURCE_LIST } from "./SOURCE_LIST";

const VideoPlayer = dynamic(() => import("@components/video/VideoPlayer"));

const VideoModalContent = dynamic(
  () => import("../VideoModal/VideoModalContent")
);
const VideoModalWrapper = dynamic(
  () => import("../VideoModal/VideoModalWrapper")
);

const SliderTrack = () => {
  const [currentSource, setCurrentSource] = useState("");
  const [currentPoster, setCurrentPoster] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex
      gap="20px"
      maxW="100vw"
      overflowX="auto"
      sx={{
        "-webkit-overflow-scrolling": "touch",
      }}
      px="20px"
    >
      {SOURCE_LIST.map(({ id, videoUrl, posterUrl }) => {
        return (
          <SliderCard
            id={id}
            onOpen={onOpen}
            setCurrentPoster={setCurrentPoster}
            setCurrentSource={setCurrentSource}
            videoUrl={videoUrl}
            posterUrl={posterUrl}
            key={id}
          />
        );
      })}
      <VideoModalWrapper isOpen={isOpen} onClose={onClose}>
        <VideoModalContent isOpen={isOpen} onClose={onClose}>
          <VideoPlayer
            source={currentSource}
            options={{ poster: currentPoster }}
          />
        </VideoModalContent>
      </VideoModalWrapper>
    </Flex>
  );
};

const Slider = () => {
  return (
    <Box
      as="section"
      py={SECTION_VERTICAL_SPACING}
      mx="clamp(-380px, calc((100vw - 1320px) / 2 * -1), -30px)"
    >
      {/* Header */}
      <Center px="30px">
        <Heading
          as="h2"
          size="md"
          mb={["30px", "40px", null, "60px"]}
          textAlign="center"
        >
          What can you do with BeMyCreator?
        </Heading>
      </Center>

      {/* Track */}
      <SliderTrack />

      {/* CTA */}
      <Flex
        mt={["30px", "40px", null, "60px"]}
        gap={4}
        justifyContent="center"
        wrap="wrap"
        px="20px"
      >
        <CTA href={Routes.newProject} variant="secondary" icon="plus">
          Start your first project
        </CTA>
        <CTA href={Routes.strategyCall} variant="primary" icon="arrow">
          Book a demo
        </CTA>
      </Flex>
    </Box>
  );
};

export default Slider;
