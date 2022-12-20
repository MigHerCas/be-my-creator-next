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
  breakpoints,
  colors,
  config,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  components,
});

export default customTheme;
