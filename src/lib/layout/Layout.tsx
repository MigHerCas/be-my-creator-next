import FixedBlobs from "@compositions/FixedBlobs";
import type { ReactNode } from "react";

import Container from "./modules/Container";
import Footer from "./modules/Footer";
import type { CTAInfo } from "./modules/Header";
import Header from "./modules/Header";

type LayoutProps = {
  children: ReactNode;
  mainCTA?: CTAInfo;
  fullHeightMain?: boolean;
  showOnlyMain?: boolean;
};

const Layout = ({
  children,
  mainCTA = {
    text: "Book a call",
    href: "/new-call",
  },
  fullHeightMain = false,
  showOnlyMain = false,
}: LayoutProps) => {
  if (showOnlyMain)
    return (
      <>
        <Container htmlTag="main" isFullHeight={fullHeightMain}>
          {children}
        </Container>
        <FixedBlobs />
      </>
    );
  return (
    <>
      <Header mainCTA={mainCTA} />
      <Container htmlTag="main" isFullHeight={fullHeightMain}>
        {children}
      </Container>
      <Footer />
      <FixedBlobs />
    </>
  );
};

export default Layout;
