import type { NextPage } from "next";
import { NextSeo } from "next-seo";

// Modules
import Carousel from "./modules/Carousel";
import Hero from "./modules/Hero";
import Stats from "./modules/Stats";

const HomeView: NextPage = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Hero />
      <Stats />
      <Carousel />
    </>
  );
};

export default HomeView;
