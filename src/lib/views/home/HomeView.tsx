import { useColorMode } from "@chakra-ui/react";
import Integrations from "@compositions/Integrations";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useEffect } from "react";

import Carousel from "./modules/Carousel/Carousel";
import Hero from "./modules/Hero";
import Stats from "./modules/Stats";
import Steps from "./modules/Steps/Steps";
import SuccessStories from "./modules/SuccessStories";
import Versus from "./modules/Versus/Versus";

const FAQ = dynamic(() => import("@compositions/FAQ/FAQ"));

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
      <Integrations />
      <Carousel />
      <SuccessStories />
      <FAQ />
      <Versus />
    </>
  );
};

export default HomeView;
