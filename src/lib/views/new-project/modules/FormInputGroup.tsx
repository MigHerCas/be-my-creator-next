import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { themeColors } from "@helpers/ui-values";
import type { UseFormRegisterReturn } from "react-hook-form";

interface Props {
  label: string;
  errorMessage?: string;
  helperText?: string;
  type: string;
  placeholder: string;
  registerCallback: UseFormRegisterReturn;
  clearErrorCallback: () => void;
}

const FormInputGroup = ({
  label,
  errorMessage,
  helperText,
  type,
  placeholder,
  registerCallback,
  clearErrorCallback,
}: Props) => {
  return (
    <FormControl mx="auto" isInvalid={Boolean(errorMessage)}>
      <FormLabel fontSize="24px" mb="20px">
        {label}
      </FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        required
        display="block"
        fontSize={["22px", null, "30px"]}
        p="0px 0px 8px"
        borderRadius={0}
        border="none"
        outline="none"
        boxShadow="rgb(235 219 173 / 30%) 0px 1px"
        onFocus={() => {
          clearErrorCallback();
          if (window) window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        _active={{
          outline: "none",
          border: "none",
          boxShadow: `${themeColors.primary} 0px 2px`,
        }}
        _focus={{
          outline: "none",
          border: "none",
          boxShadow: `${themeColors.primary} 0px 2px`,
        }}
        _invalid={{
          boxShadow: `${themeColors.red} 0px 2px`,
        }}
        {...registerCallback}
      />
      {helperText ? <FormHelperText>{helperText}</FormHelperText> : null}
      {errorMessage ? (
        <FormErrorMessage>{errorMessage}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default FormInputGroup;
