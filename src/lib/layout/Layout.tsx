import FixedBlobs from "@compositions/FixedBlobs";
import type { ReactNode } from "react";

import Footer from "./modules/Footer";
import type { CTAInfo } from "./modules/Header";
import Header from "./modules/Header";
import MainContainer from "./modules/MainContainer";

type LayoutProps = {
  children: ReactNode;
  mainCTA?: CTAInfo;
  fullHeightMain?: boolean;
  showOnlyMain?: boolean;
  hideBlobs?: boolean;
};

const Layout = ({
  children,
  mainCTA = {
    text: "Book a call",
    href: "/new-call",
  },
  fullHeightMain = false,
  showOnlyMain = false,
  hideBlobs = false,
}: LayoutProps) => {
  return (
    <>
      {showOnlyMain ? null : <Header mainCTA={mainCTA} />}
      <MainContainer isFullHeight={fullHeightMain}>{children}</MainContainer>
      {showOnlyMain ? null : <Footer />}
      {hideBlobs ? null : <FixedBlobs />}
    </>
  );
};

export default Layout;
