import { useColorMode } from "@chakra-ui/react";
import FAQ from "@compositions/FAQ/FAQ";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import { useEffect } from "react";

import Carousel from "./modules/Carousel/Carousel";
import Hero from "./modules/Hero";
import Stats from "./modules/Stats";
import Steps from "./modules/Steps/Steps";
import SuccessStories from "./modules/SuccessStories";
import Versus from "./modules/Versus/Versus";

const HomeView: NextPageWithLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return (
    <>
      <NextSeo title="Home" />
      <Hero />
      <Steps />
      <Stats />
      <Carousel />
      <SuccessStories />
      <FAQ />
      <Versus />
    </>
  );
};

export default HomeView;
