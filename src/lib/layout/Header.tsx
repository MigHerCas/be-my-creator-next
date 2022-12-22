import { Box, Flex } from "@chakra-ui/react";
import Logo from "@components/logo/Logo";

import ThemeToggle from "@components/themeToggle/ThemeToggle";
import { MAX_WIDTH } from "@helpers/ui-values";

const Header = () => {
  return (
    <Flex as="header" maxW={MAX_WIDTH} mx="auto" width="full" align="center">
      <Logo />

      <Box marginLeft="auto">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
