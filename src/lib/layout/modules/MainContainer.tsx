import type { StyleProps } from "@chakra-ui/react";
import { Container as ChakraContainer } from "@chakra-ui/react";
import { APP_MAX_WIDTH } from "@helpers/ui-values";
import type { FC, PropsWithChildren } from "react";

interface Props {
  isFullHeight: boolean;
}

const MainContainer: FC<PropsWithChildren<Props>> = ({
  children,
  isFullHeight,
}) => {
  const baseStyles: StyleProps = {
    position: "relative",
    maxWidth: APP_MAX_WIDTH,
    px: "30px",
    mx: "auto",
    height: isFullHeight ? "100vh" : "auto",
  };

  return (
    <ChakraContainer as="main" {...baseStyles}>
      {children}
    </ChakraContainer>
  );
};

export default MainContainer;
