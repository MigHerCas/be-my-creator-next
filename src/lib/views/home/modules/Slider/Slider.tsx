import { Box, Center, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import VideoPlayer from "@components/video/VideoPlayer";
import dynamic from "next/dynamic";
import type { FC } from "react";
import { useState } from "react";

import SliderCard from "./SliderCard";
import { SOURCE_LIST } from "./SOURCE_LIST";

const VideoModal = dynamic(() => import("@components/video/VideoModal"));

const Slider: FC = () => {
  const [currentSource, setCurrentSource] = useState("");
  const [currentPoster, setCurrentPoster] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex gap="20px" maxW="100vw" overflow="auto">
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
      <VideoModal isOpen={isOpen} onClose={onClose}>
        <VideoPlayer
          source={currentSource}
          options={{ poster: currentPoster }}
        />
      </VideoModal>
    </Flex>
  );
};

const Carousel: FC = () => {
  return (
    <Box
      as="section"
      py="60px"
      mx="clamp(-380px, calc((100vw - 1320px) / 2 * -1), -30px)"
    >
      <Center px="30px">
        <Heading as="h2" size="md" mb={20} textAlign="center">
          Check some examples
        </Heading>
      </Center>
      <Slider />
      <Flex mt={14} gap={4} justifyContent="center" wrap="wrap">
        <CTA href="/new-project" variant="secondary" icon="plus">
          Start your first project
        </CTA>
        <CTA href="/new-call" variant="primary" icon="arrow">
          Book a demo
        </CTA>
      </Flex>
    </Box>
  );
};

export default Carousel;