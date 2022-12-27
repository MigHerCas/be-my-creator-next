import { NextSeo } from "next-seo";
import type { FC } from "react";

import Hero from "./modules/Hero";
import Stats from "./modules/Stats";

const HomeView: FC = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Hero />
      <Stats />
    </>
  );
};

export default HomeView;
