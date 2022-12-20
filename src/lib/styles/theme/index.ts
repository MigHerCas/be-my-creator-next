import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from "./typography";

const customTheme = extendTheme({
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  colors,
  config,
  components,
  breakpoints,
});

export default customTheme;
