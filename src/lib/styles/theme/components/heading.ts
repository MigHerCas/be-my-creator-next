import { defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  // The styles all headings configs have in common
  baseStyle: {
    marginTop: 0,
  },
  sizes: {
    xs: {
      fontSize: "1.5em",
      lineHeight: "1.4",
      fontWeight: "600",
    },
    sm: {
      fontSize: "1.8em",
      lineHeight: "1.4",
      fontWeight: "700",
    },
    md: {
      fontSize: "2.4em",
      lineHeight: "1.25",
      fontWeight: "700",
    },
    lg: {
      fontSize: "4em",
      lineHeight: "1.1",
      fontWeight: "700",
    },
    xl: {
      fontSize: "6em",
      lineHeight: "1.1",
      fontWeight: "700",
    },
  },

  // Default size
  defaultProps: {
    size: "md",
  },
});
