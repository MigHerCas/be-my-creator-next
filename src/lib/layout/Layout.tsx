import FixedBlobs from "@layout/modules/FixedBlobs";
import { Routes } from "@routes";
import type { ReactNode } from "react";

import Footer from "./modules/Footer";
import type { CTAInfo } from "./modules/Header";
import Header from "./modules/Header";
import MainContainer from "./modules/MainContainer";
import WhatsAppCTA from "./modules/WhatsAppCTA";

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
    href: Routes.strategyCall,
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
      <WhatsAppCTA />
      {hideBlobs ? null : <FixedBlobs />}
    </>
  );
};

export default Layout;
