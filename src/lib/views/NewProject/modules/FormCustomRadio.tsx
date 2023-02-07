import type { UseRadioProps } from "@chakra-ui/react";
import { Box, useRadio } from "@chakra-ui/react";
import { themeColors } from "@helpers/ui-values";
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
      <input {...input} hidden />
      <Box
        {...checkbox}
        cursor="pointer"
        color="white"
        bgColor={state.isChecked ? themeColors.primary : themeColors.black}
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow={state.isFocused ? "outline" : "none"}
        flex="1"
        minH="100px"
        fontSize="20px"
        fontWeight={500}
      >
        {children}
      </Box>
    </Box>
  );
});

export default FormCustomRadio;
