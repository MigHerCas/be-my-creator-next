import { ChakraProvider } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";

import customTheme from "lib/styles/theme";

export const Chakra: FC<PropsWithChildren> = ({ children }) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};
