import type { UseRadioProps } from "@chakra-ui/react";
import { Box, useRadio } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { forwardRef } from "react";

const FormCustomRadio = forwardRef<
  HTMLInputElement,
  PropsWithChildren<UseRadioProps>
>(({ children, ...radioProps }, ref) => {
  const { state, getInputProps, getCheckboxProps } = useRadio(radioProps);

  const input = getInputProps({ ref });
  const checkbox = getCheckboxProps();
  return (
    <Box as="label" w="full">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        color="white"
        bgColor={state.isChecked ? "#00C4A2" : "#1c1c1c"}
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow={state.isFocused ? "outline" : "none"}
        flex="1"
        minH="100px"
        fontSize="20px"
      >
        {children}
      </Box>
    </Box>
  );
});

export default FormCustomRadio;
