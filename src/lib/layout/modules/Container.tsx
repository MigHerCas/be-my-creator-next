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
    pt: "5vh",
    mx: "auto",
    flex: "1",
    display: "flex",
    gap: "90px",
    flexDir: "column",
  };

  return (
    <ChakraContainer as={htmlTag} {...baseStyles}>
      {children}
    </ChakraContainer>
  );
};

export default Container;
