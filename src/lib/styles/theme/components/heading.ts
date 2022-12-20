import { defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  // The styles all headings configs have in common
  baseStyle: {},
  sizes: {
    extraLarge: {},
    large: {},
    medium: {},
    regular: {},
    light: {},
    small: {},
    titleTag: {},
  },
  variants: {
    light: {},
    gray: {},
    dark: {},
  },
  // The default size and variant values
  defaultProps: {
    size: "regular",
    variant: "dark",
  },
});
