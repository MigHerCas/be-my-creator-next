import { IconButton, useColorMode } from "@chakra-ui/react";
import { Sun, Moon } from "react-feather";

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      position="fixed"
      top={8}
      right={8}
      aria-label="theme toggle"
      icon={colorMode === "light" ? <Sun /> : <Moon />}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggle;
