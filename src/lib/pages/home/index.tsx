import { Flex } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import type { VideoJsPlayerOptions } from "video.js";

import VideoPlayer from "lib/components/video";

const Home = () => {
  const videoJsOptions: VideoJsPlayerOptions = {
    sources: [
      {
        src: "//vjs.zencdn.net/v/oceans.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
      gap={4}
      mb={8}
      w="full"
    >
      <NextSeo title="Home" />

      <VideoPlayer options={videoJsOptions} />
    </Flex>
  );
};

export default Home;
