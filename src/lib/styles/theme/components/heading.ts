import { defineStyleConfig } from "@chakra-ui/react";

export const Heading = defineStyleConfig({
  // The styles all headings configs have in common
  baseStyle: {
    marginTop: 0,
  },
  sizes: {
    xs: {
      fontSize: "1.5rem",
      lineHeight: "1.4",
      fontWeight: "600",
      marginBottom: "0.75rem",
    },
    sm: {
      fontSize: "1.75rem",
      lineHeight: "1.4",
      fontWeight: "700",
      marginBottom: "0.875rem",
    },
    md: {
      fontSize: "2.375rem",
      lineHeight: "1.25",
      fontWeight: "700",
      marginBottom: "1.25rem",
    },
    lg: {
      fontSize: "4rem",
      lineHeight: "1.1",
      fontWeight: "700",
      marginBottom: "2rem",
    },
    xl: {
      fontSize: "6rem",
      lineHeight: "1.1",
      fontWeight: "700",
      marginBottom: "2.5rem",
    },
  },

  // Default size
  defaultProps: {
    size: "md",
  },
});
