import FixedBlobs from "@compositions/FixedBlobs";
import type { ReactNode } from "react";

import Container from "./modules/Container";
import Footer from "./modules/Footer";
import type { CTAInfo } from "./modules/Header";
import Header from "./modules/Header";

type LayoutProps = {
  children: ReactNode;
  mainCTA?: CTAInfo;
  hideBlobsOnMobile?: boolean;
  hideBlobs?: boolean;
  hideHeaderLinks?: boolean;
};

const Layout = ({
  children,
  mainCTA = {
    text: "Book a call",
    href: "/new-call",
  },
  hideHeaderLinks = false,
  hideBlobsOnMobile = false,
  hideBlobs = false,
}: LayoutProps) => {
  return (
    <>
      <Header hideLinks={hideHeaderLinks} mainCTA={mainCTA} />
      <Container htmlTag="main">{children}</Container>
      <Footer />

      <FixedBlobs hideBlobsOnMobile={hideBlobsOnMobile} hideBlobs={hideBlobs} />
    </>
  );
};

export default Layout;
