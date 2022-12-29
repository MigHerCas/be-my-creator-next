import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import Carousel from "./modules/Carousel/Carousel";
import Hero from "./modules/Hero";
import Stats from "./modules/Stats";
import SuccessStories from "./modules/SuccessStories";

const HomeView: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Hero />
      <Stats />
      <Carousel />
      <SuccessStories />
    </>
  );
};

export default HomeView;
