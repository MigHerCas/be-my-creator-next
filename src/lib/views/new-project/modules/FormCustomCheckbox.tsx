import type { UseCheckboxProps } from "@chakra-ui/react";
import { Box, useCheckbox } from "@chakra-ui/react";
import { themeColors } from "@helpers/ui-values";
import type { PropsWithChildren } from "react";
import { forwardRef } from "react";

const FormCustomCheckbox = forwardRef<
  HTMLInputElement,
  PropsWithChildren<UseCheckboxProps>
>(({ children, ...checkboxProps }, ref) => {
  const { state, getCheckboxProps, getInputProps } = useCheckbox({
    ...checkboxProps,
  });

  const input = getInputProps({ ref });
  const checkbox = getCheckboxProps();
  return (
    <Box as="label" w="full">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        color="white"
        bgColor={state.isChecked ? themeColors.primary : themeColors.black}
        borderRadius="md"
        display="flex"
        alignItems="center"
        justifyContent="center"
        boxShadow={state.isChecked ? "outline" : "none"}
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

export default FormCustomCheckbox;
