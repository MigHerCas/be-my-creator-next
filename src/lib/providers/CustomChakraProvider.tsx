import type { ChakraProviderProps } from "@chakra-ui/provider";
import { ChakraProvider as BaseChakraProvider } from "@chakra-ui/provider";
import customTheme from "@styles/theme";

const createChakraProvider = () => {
  return function ChakraProvider({ children }: ChakraProviderProps) {
    return (
      <BaseChakraProvider theme={customTheme}>{children}</BaseChakraProvider>
    );
  };
};

export const ChakraProvider = createChakraProvider();
