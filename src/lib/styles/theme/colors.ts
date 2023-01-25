import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors: DeepPartial<
  Record<string, Theme["colors"]["blackAlpha"]>
> = {
  brand: {
    100: "#1c1c1c",
    200: "#272727",
    300: "#00C4A2",
    400: "#FCC54E",
    500: "#BCE500",
    600: "hsla(0, 0%, 100%, 0.5)",
  },
};

export const colors = {
  ...extendedColors,
};
