import { extendTheme } from "@chakra-ui/react";

import { breakpoints } from "./breakpoints";
import { colors } from "./colors";
import { components } from "./components";
import { config } from "./config";
import { typography } from "./typography";

const customTheme = extendTheme({
  typography,
  colors,
  config,
  components,
  breakpoints,
});

export default customTheme;
