import FixedBlobs from "@compositions/FixedBlobs";
import type { ReactNode } from "react";

import Container from "./modules/Container";
import Footer from "./modules/Footer";
import Header from "./modules/Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container htmlTag="main">{children}</Container>
      <Footer />

      {/* Fixed: Blob it!  */}
      <FixedBlobs />
    </>
  );
};

export default Layout;
