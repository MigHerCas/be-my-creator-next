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
    </>
  );
};

export default Layout;
