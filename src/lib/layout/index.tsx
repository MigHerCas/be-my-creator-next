import FixedBlobs from "@compositions/FixedBlobs";
import type { ReactNode } from "react";

import Container from "./modules/Container";
import Footer from "./modules/Footer";
import Header from "./modules/Header";

type LayoutProps = {
  children: ReactNode;
  hideBlobsOnMobile?: boolean;
};

const Layout = ({ children, hideBlobsOnMobile = false }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container htmlTag="main">{children}</Container>
      <Footer />

      <FixedBlobs hideBlobsOnMobile={hideBlobsOnMobile} />
    </>
  );
};

export default Layout;
