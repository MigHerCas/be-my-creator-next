import { Box } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import type { VideoJsPlayerOptions } from "video.js";

import VideoPlayer from "lib/components/video";

const Home = () => {
  const videoJsOptions: VideoJsPlayerOptions = {
    autoplay: true,
    muted: true,
    loop: true,
    controls: false,
    preload: "auto",
    bigPlayButton: false,
    responsive: true,
    fluid: true,
    aspectRatio: "9:16",
    poster: "/images/poster.jpg",
    sources: [
      {
        src: "/videos/trend.mp4",
        type: "video/mp4",
      },
    ],
  };

  return (
    <Box
      w={220}
      minH={380}
      border="4px"
      borderColor="white"
      borderRadius="25"
      overflow="hidden"
    >
      <NextSeo title="Home" />

      <VideoPlayer options={videoJsOptions} />
    </Box>
  );
};

export default Home;
