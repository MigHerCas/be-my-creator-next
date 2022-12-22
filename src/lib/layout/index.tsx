import type { ReactNode } from "react";
import { Box } from "@chakra-ui/react";

import Footer from "./Footer";
import Header from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box as="main" marginY={22}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
