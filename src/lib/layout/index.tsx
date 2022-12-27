import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import Footer from "./Footer";
import { HeaderTemplate } from "./Header";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <HeaderTemplate />
      <Box as="main" marginY={22}>
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
