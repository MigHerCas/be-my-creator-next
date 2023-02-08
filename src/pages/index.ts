import HomeView from "@views/home/HomeView";
import type { NextApiRequest, NextApiResponse } from "next";

export async function getServerSideProps({
  res,
}: {
  req: NextApiRequest;
  res: NextApiResponse;
}) {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  return {
    props: {},
  };
}

export default HomeView;
