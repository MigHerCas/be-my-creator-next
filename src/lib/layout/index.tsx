import FixedBlobs from "@compositions/FixedBlobs";
import type { ReactNode } from "react";

import Container from "./modules/Container";
import Footer from "./modules/Footer";
import Header from "./modules/Header";

type LayoutProps = {
  children: ReactNode;
  hideBlobsOnMobile?: boolean;
  hideBlobs?: boolean;
  hideHeaderLinks?: boolean;
};

const Layout = ({
  children,
  hideHeaderLinks = false,
  hideBlobsOnMobile = false,
  hideBlobs = false,
}: LayoutProps) => {
  return (
    <>
      <Header hideLinks={hideHeaderLinks} />
      <Container htmlTag="main">{children}</Container>
      <Footer />

      <FixedBlobs hideBlobsOnMobile={hideBlobsOnMobile} hideBlobs={hideBlobs} />
    </>
  );
};

export default Layout;
