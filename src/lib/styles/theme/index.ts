import { extendTheme } from "@chakra-ui/react";

import { components } from "./components";
import { config } from "./config";
import { styles } from "./styles";
import {
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
} from "./typography";

const customTheme = extendTheme({
  styles,
  config,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  components,
});

export default customTheme;
