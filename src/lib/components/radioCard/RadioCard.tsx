import type { UseRadioProps } from "@chakra-ui/react";
import { Box, useRadio } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";

const RadioCard: FC<PropsWithChildren<UseRadioProps>> = ({
  children,
  ...radioProps
}) => {
  const { getInputProps, getCheckboxProps } = useRadio(radioProps);

  const input = getInputProps();
  const checkbox = getCheckboxProps();
  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="md"
        boxShadow="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        _checked={{
          bg: "#00C4A2",
          color: "white",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        minW="200px"
        minH="100px"
        fontSize="24px"
      >
        {children}
      </Box>
    </Box>
  );
};

export default RadioCard;
