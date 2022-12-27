import { NextSeo } from "next-seo";

import Hero from "./modules/Hero";

const Home = () => {
  return (
    <>
      <NextSeo title="Home" />
      <Hero />
    </>
  );
};

export default Home;
