import { Container as ChakraContainer } from "@chakra-ui/react";
import type { StyleProps, As } from "@chakra-ui/react";
import { APP_MAX_WIDTH } from "@helpers/ui-values";
import type { FC, PropsWithChildren } from "react";

interface Props {
  htmlTag: As;
  isFullHeight: boolean;
}

const Container: FC<PropsWithChildren<Props>> = ({
  children,
  isFullHeight,
  htmlTag = "div",
}) => {
  const baseStyles: StyleProps = {
    position: "relative",
    maxWidth: APP_MAX_WIDTH,
    px: "30px",
    mx: "auto",
    flex: "1",
    height: isFullHeight ? "100vh" : "auto",
    display: "flex",
    gap: ["30px", null, "60px", "90px"],
    flexDir: "column",
  };

  return (
    <ChakraContainer as={htmlTag} {...baseStyles}>
      {children}
    </ChakraContainer>
  );
};

export default Container;
