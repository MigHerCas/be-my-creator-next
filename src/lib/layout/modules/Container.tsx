import { Container as ChakraContainer } from "@chakra-ui/react";
import type { StyleProps, As } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";

interface Props {
  htmlTag: As;
}

const Container: FC<PropsWithChildren<Props>> = ({
  children,
  htmlTag = "div",
}) => {
  const baseStyles: StyleProps = {
    position: "relative",
    maxWidth: "1380px",
    px: "30px",
    mx: "auto",
    flex: "1",
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
