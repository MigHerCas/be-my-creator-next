import { useStore } from "@supabase/Store";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";

import Carousel from "./modules/Carousel/Carousel";
import Hero from "./modules/Hero";
import Stats from "./modules/Stats";
import Steps from "./modules/Steps/Steps";
import SuccessStories from "./modules/SuccessStories";
import Versus from "./modules/Versus/Versus";

const HomeView: NextPage = () => {
  const { leads } = useStore();
  console.log(leads);
  return (
    <>
      <NextSeo title="Home" />
      <Hero />
      <Stats />
      <Steps />
      <Carousel />
      <SuccessStories />
      <Versus />
    </>
  );
};

export default HomeView;
