import {
  FormControl,
  FormLabel,
  Text,
  Flex,
  useRadioGroup,
  FormErrorMessage,
} from "@chakra-ui/react";
import type { FormFields } from "@database/Store";
import { forwardRef } from "react";
import type { Control } from "react-hook-form";
import { useController } from "react-hook-form";

import FormCustomRadio from "./FormCustomRadio";

interface Props {
  name: keyof FormFields;
  label: string;
  description?: string;
  options: Array<string>;
  control: Control<FormFields>;
  defaultValue: string;
  errorMessage?: string;
}

const FormRadioGroup = forwardRef<HTMLInputElement, Props>(
  (
    { name, label, description, control, defaultValue, options, errorMessage },
    ref
  ) => {
    const { field } = useController({
      name,
      control,
      rules: { required: "Please select at least one option" },
      defaultValue,
    });

    const value = field.value as string;

    const { getRootProps, getRadioProps } = useRadioGroup({
      ...field,
      value,
    });

    const group = getRootProps();

    return (
      <FormControl mx="auto" ref={ref} isInvalid={Boolean(errorMessage)}>
        <FormLabel fontSize="24px" mb="20px">
          {label}
        </FormLabel>

        {/* Description (if needed) */}
        {description ? (
          <Text size="md" mb="30px">
            {description}
          </Text>
        ) : null}

        <Flex flexDir={["column", null, "row"]} gap={4} {...group}>
          {options.map((optionValue) => {
            const radio = getRadioProps({ value: optionValue });
            return (
              <FormCustomRadio key={optionValue} {...radio}>
                {optionValue}
              </FormCustomRadio>
            );
          })}
        </Flex>
        {errorMessage ? (
          <FormErrorMessage>{errorMessage}</FormErrorMessage>
        ) : null}
      </FormControl>
    );
  }
);

export default FormRadioGroup;
