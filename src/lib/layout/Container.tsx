import type { FC } from "react";
import { Container as ChakraContainer } from "@chakra-ui/react";
import type { StyleProps } from "@chakra-ui/react";

interface Props {
  children: React.ReactNode;
}

const Container: FC<Props> = ({ children }) => {
  const baseStyles: StyleProps = {
    position: "relative",
    maxWidth: "1380px",
    px: "30px",
    mx: "auto",
    flex: "1",
  };

  return (
    <ChakraContainer as="section" {...baseStyles}>
      {children}
    </ChakraContainer>
  );
};

export default Container;
