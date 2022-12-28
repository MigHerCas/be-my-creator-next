import ReviewBox from "@compositions/ReviewBox";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import Carousel from "./modules/Carousel/Carousel";
import Hero from "./modules/Hero";
import Stats from "./modules/Stats";

const HomeView: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Hero />
      <Stats />
      <Carousel />
      <ReviewBox />
    </>
  );
};

export default HomeView;
