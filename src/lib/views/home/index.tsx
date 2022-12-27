import { NextSeo } from "next-seo";

import Hero from "./modules/Hero";
import Stats from "./modules/Stats";

const Home = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Hero />
      <Stats />
    </>
  );
};

export default Home;
