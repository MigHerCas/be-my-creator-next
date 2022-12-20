import { defineStyleConfig } from "@chakra-ui/react";

export const Text = defineStyleConfig({
  // The styles all paragraphs configs have in common
  baseStyle: {},
  sizes: {
    main: {},
    large: {},
    small: {},
    extraSmall: {},
  },
  // The default size and variant values
  defaultProps: {
    size: "main",
  },
});
