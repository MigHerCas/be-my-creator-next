import {
  Flex,
  FormControl,
  FormLabel,
  Text,
  useCheckboxGroup,
} from "@chakra-ui/react";
import type { FormFields } from "@database/Store";
import { forwardRef } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

import FormCustomCheckbox from "./FormCustomCheckbox";

interface Props {
  name: keyof FormFields;
  label: string;
  options: Array<string>;
  defaultValue: string;
  registerCallback: UseFormRegisterReturn;
}

const FormCheckboxGroup = forwardRef<HTMLInputElement, Props>(
  ({ label, defaultValue, options, registerCallback }, ref) => {
    const { value, getCheckboxProps } = useCheckboxGroup({
      defaultValue: [defaultValue],
    });

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
              <FormCustomCheckbox
                key={optionValue}
                {...checkbox}
                registerCallback={registerCallback}
              >
                {optionValue}
              </FormCustomCheckbox>
            );
          })}
        </Flex>
      </FormControl>
    );
  }
);

export default FormCheckboxGroup;
