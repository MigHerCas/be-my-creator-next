import VideoModal from "@components/modal/VideoModal";
import VideoPlayer from "@components/video/VideoPlayer";
import { NextSeo } from "next-seo";

import Hero from "./modules/Hero";

const Home = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Hero />
      <VideoModal>
        <VideoPlayer />
      </VideoModal>
    </>
  );
};

export default Home;
