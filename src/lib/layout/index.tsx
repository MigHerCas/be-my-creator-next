import FixedBlobs from "@compositions/FixedBlobs";
import type { ReactNode } from "react";

import Container from "./modules/Container";
import Footer from "./modules/Footer";
import Header from "./modules/Header";

type LayoutProps = {
  children: ReactNode;
  hideBlobs?: boolean;
};

const Layout = ({ children, hideBlobs = false }: LayoutProps) => {
  return (
    <>
      <Header />
      <Container htmlTag="main">{children}</Container>
      <Footer />

      {hideBlobs ? null : <FixedBlobs />}
    </>
  );
};

export default Layout;
