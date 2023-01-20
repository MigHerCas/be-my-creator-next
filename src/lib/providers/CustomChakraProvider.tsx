import type { ChakraProviderProps } from "@chakra-ui/provider";
import { ChakraProvider as BaseChakraProvider } from "@chakra-ui/provider";
import customTheme from "@styles/theme";
import "@fontsource/red-hat-display/800.css";
import "@fontsource/red-hat-display/700.css";
import "@fontsource/red-hat-display/600.css";
import "@fontsource/red-hat-display/500.css";
import "@fontsource/red-hat-display/400.css";
import "@fontsource/red-hat-display/300.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/300.css";

const createChakraProvider = () => {
  return function ChakraProvider({ children }: ChakraProviderProps) {
    return (
      <BaseChakraProvider theme={customTheme}>{children}</BaseChakraProvider>
    );
  };
};

export const ChakraProvider = createChakraProvider();
