import { ScaleFade } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";

interface Props {
  isActive: boolean;
}

const FormStepWrapper: FC<PropsWithChildren<Props>> = ({
  isActive,
  children,
}) => {
  if (!isActive) return null;

  return (
    <ScaleFade
      initialScale={0.9}
      delay={0.1}
      in
      transition={{
        enter: {
          duration: 0.5,
        },
      }}
    >
      {children}
    </ScaleFade>
  );
};

export default FormStepWrapper;
