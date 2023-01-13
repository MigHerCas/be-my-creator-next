import { alertAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

import { Heading } from "./heading";
import { Text } from "./text";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys);

const customSuccess = definePartsStyle({
  container: {
    background: "green.500",
    color: "white",
    _dark: {
      background: "green.500",
      color: "white",
    },
  },
  title: {
    color: "white",
  },
  description: {
    color: "white",
  },
});

const customError = definePartsStyle({
  container: {
    background: "red.500",
    color: "white",
    _dark: {
      background: "red.500",
      color: "white",
    },
  },
  title: {
    color: "white",
  },
  description: {
    color: "white",
  },
});

const alertTheme = defineMultiStyleConfig({
  variants: { customSuccess, customError },
});

export const components = {
  Heading,
  Text,
  Alert: alertTheme,
};
