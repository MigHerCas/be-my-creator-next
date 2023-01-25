import { defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  // The styles all headings configs have in common
  baseStyle: {
    marginTop: 0,
  },
  sizes: {
    xs: {
      fontSize: "1.125rem",
      lineHeight: "1.4",
      marginBottom: "0.75rem",
    },
    sm: {
      fontSize: ["1.25rem", null, "1.5rem"],
      lineHeight: "1.4",
      marginBottom: "0.875rem",
    },
    md: {
      fontSize: ["2rem", "2.15rem", "2.35rem", null, "2.875rem"],
      lineHeight: "1.25",
      marginBottom: "1.25rem",
    },
    lg: {
      fontSize: ["2rem", "2.5rem", "3rem", null, "4rem"],
      lineHeight: "1.1",
      marginBottom: "2rem",
    },
    xl: {
      fontSize: "6rem",
      lineHeight: "1.1",
      marginBottom: "2.5rem",
    },
  },

  // Default size
  defaultProps: {
    size: "md",
  },
});
