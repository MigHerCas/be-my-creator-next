import { useColorMode } from "@chakra-ui/react";
import type { NextPageWithLayout } from "@pages/_app";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useEffect } from "react";

import Hero from "./modules/Hero/Hero";
import Integrations from "./modules/Integrations";
import Slider from "./modules/Slider/Slider";
import Steps from "./modules/Steps/Steps";
import SuccessStories from "./modules/SuccessStories/SuccessStories";
import Versus from "./modules/Versus/Versus";

const Stats = dynamic(() => import("./modules/Stats"));
const FAQ = dynamic(() => import("./modules/FAQ/FAQContainer"));

const HomeView: NextPageWithLayout = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (colorMode === "dark") toggleColorMode();
  }, [colorMode, toggleColorMode]);

  return (
    <>
      <NextSeo title="BeMyCreator | Your UGC agency" />
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
