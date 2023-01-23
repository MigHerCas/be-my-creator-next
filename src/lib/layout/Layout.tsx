import FixedBlobs from "@compositions/FixedBlobs";
import type { ReactNode } from "react";

import MainContainer from "./modules/Container";
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
  return (
    <>
      {showOnlyMain ? null : <Header mainCTA={mainCTA} />}
      <MainContainer isFullHeight={fullHeightMain}>{children}</MainContainer>
      {showOnlyMain ? null : <Footer />}
      <FixedBlobs />
    </>
  );
};

export default Layout;
