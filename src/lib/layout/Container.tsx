import { Container as ChakraContainer } from "@chakra-ui/react";
import type { StyleProps, As } from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
  children: React.ReactNode;
  htmlTag: As;
}

const Container: FC<Props> = ({ children, htmlTag = "div" }) => {
  const baseStyles: StyleProps = {
    position: "relative",
    maxWidth: "1380px",
    px: "30px",
    mx: "auto",
    flex: "1",
  };

  return (
    <ChakraContainer as={htmlTag} {...baseStyles}>
      {children}
    </ChakraContainer>
  );
};

export default Container;
