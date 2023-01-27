import {
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useCheckboxGroup,
} from "@chakra-ui/react";
import type { FormFields } from "@database/Store";
import { forwardRef, useEffect } from "react";
import type { Control, UseFormSetValue } from "react-hook-form";
import { Controller } from "react-hook-form";

import FormCustomCheckbox from "./FormCustomCheckbox";

interface Props {
  name: keyof FormFields;
  label: string;
  options: Array<string | number>;
  defaultValue: Array<string | number>;
  setValue: UseFormSetValue<FormFields>;
  control: Control<FormFields>;
  errorMessage?: string;
}

const FormCheckboxGroup = forwardRef<HTMLInputElement, Props>(
  (
    { name, label, control, setValue, options, defaultValue, errorMessage },
    ref
  ) => {
    const { value, getCheckboxProps } = useCheckboxGroup({
      defaultValue,
    });

    useEffect(() => {
      setValue("test", value, {
        shouldValidate: true,
      });
    }, [setValue, value]);

    return (
      <FormControl mx="auto" ref={ref} isInvalid={Boolean(errorMessage)}>
        <FormLabel fontSize="24px" mb="20px">
          {label}
        </FormLabel>

        <Flex flexDir={["column", null, "row"]} gap={4}>
          {options.map((optionValue) => {
            const checkbox = getCheckboxProps({ value: optionValue });
            return (
              <Controller
                name={name}
                control={control}
                rules={{
                  required: "Please select one option at least",
                  minLength: 1,
                }}
                defaultValue={defaultValue}
                render={() => (
                  <FormCustomCheckbox key={optionValue} {...checkbox}>
                    {optionValue}
                  </FormCustomCheckbox>
                )}
              />
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

export default FormCheckboxGroup;
