import { useColorMode } from "@chakra-ui/react";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useEffect } from "react";

import Hero from "./modules/Hero/Hero";
import Integrations from "./modules/Integrations";
import Slider from "./modules/Slider/Slider";
import Stats from "./modules/Stats";
import Steps from "./modules/Steps/Steps";
import SuccessStories from "./modules/SuccessStories/SuccessStories";
import Versus from "./modules/Versus/Versus";

const FAQ = dynamic(() => import("@views/home/modules/FAQ/FAQ"));

const HomeView: NextPageWithLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return (
    <>
      <NextSeo title="Home" />
      <Hero />
      <Slider />
      <Steps />
      <Stats />
      <Integrations />
      <SuccessStories />
      <FAQ />
      <Versus />
    </>
  );
};

export default HomeView;
