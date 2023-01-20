import { defineStyleConfig } from "@chakra-ui/react";

export const Text = defineStyleConfig({
  // The styles all headings configs have in common
  baseStyle: {
    lineHeight: "1.5",
    letterSpacing: "-0.02em",
    marginBottom: "12px",
  },
  sizes: {
    xs: {
      fontSize: "0.875rem",
    },
    sm: {
      fontSize: "1rem",
      lineHeight: "1.6",
    },
    md: {
      fontSize: "1.25rem",
    },
    lg: {
      fontSize: "1.75rem",
    },
  },
  // Default size
  defaultProps: {
    size: "md",
  },
});
