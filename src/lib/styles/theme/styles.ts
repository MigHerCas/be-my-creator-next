import type { DeepPartial, StyleFunctionProps, Theme } from "@chakra-ui/react";
import { themeColors } from "@helpers/ui-values";

export const styles: DeepPartial<Theme["styles"]> = {
  global: ({ colorMode }: StyleFunctionProps) => ({
    "html, body": {
      bg: colorMode === "dark" ? themeColors.darkGrey : "white",
      transition: "all 300ms cubic-bezier(.645, .045, .355, 1)",
    },
    body: {
      transition: "all 300ms cubic-bezier(.645, .045, .355, 1)",
    },
  }),
};
