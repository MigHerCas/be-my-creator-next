import {
  Flex,
  FormControl,
  FormLabel,
  Text,
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
}

const FormCheckboxGroup = forwardRef<HTMLInputElement, Props>(
  ({ name, label, control, setValue, options, defaultValue }, ref) => {
    const { value, getCheckboxProps } = useCheckboxGroup({
      defaultValue,
    });

    useEffect(() => {
      setValue("test", value, {
        shouldValidate: true,
      });
    }, [setValue, value]);

    return (
      <FormControl mx="auto" ref={ref}>
        <FormLabel fontSize="24px" mb="20px">
          {label}
        </FormLabel>

        <Text>The selected checkboxes are: {value.sort().join(" and ")}</Text>
        <Flex flexDir={["column", null, "row"]} gap={4}>
          {options.map((optionValue) => {
            const checkbox = getCheckboxProps({ value: optionValue });
            return (
              <Controller
                name={name}
                control={control}
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
      </FormControl>
    );
  }
);

export default FormCheckboxGroup;
