import { FormControl, FormLabel, Flex, useRadioGroup } from "@chakra-ui/react";
import type { FormFields } from "@views/new-project/NewProjectView";
import { forwardRef } from "react";
import type { Control } from "react-hook-form";
import { useController } from "react-hook-form";

import FormCustomRadio from "./FormCustomRadio";

interface Props {
  name: keyof FormFields;
  label: string;
  options: Array<string>;
  control: Control<FormFields>;
  defaultValue: string;
}

const FormRadioGroup = forwardRef<HTMLInputElement, Props>(
  ({ name, label, control, defaultValue, options }) => {
    const { field } = useController({
      name,
      control,
      rules: { required: "Toggle is required" },
      defaultValue,
    });

    const { getRootProps, getRadioProps } = useRadioGroup({
      ...field,
    });

    const group = getRootProps();

    return (
      <FormControl mx="auto">
        <FormLabel fontSize="24px" fontWeight="500" mb="20px">
          {label}
        </FormLabel>

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
      </FormControl>
    );
  }
);

export default FormRadioGroup;