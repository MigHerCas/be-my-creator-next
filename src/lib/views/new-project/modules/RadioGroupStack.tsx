import { FormControl, FormLabel, Flex, useRadioGroup } from "@chakra-ui/react";
import RadioCard from "@components/radioCard/RadioCard";
import type { FC } from "react";

interface Props {
  options: Array<string>;
  label: string;
  name: string;
  defaultValue: string;
  onChange: () => void;
}
const RadioGroupStack: FC<Props> = ({
  label,
  options,
  defaultValue,
  name,
  onChange,
}) => {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name,
    defaultValue,
    onChange,
  });

  const group = getRootProps();

  return (
    <FormControl mx="auto">
      <FormLabel fontSize="24px" fontWeight="500" mb="20px">
        {label}
      </FormLabel>

      <Flex flexDir={["column", null, "row"]} gap={4} {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard key={value} {...radio}>
              {value}
            </RadioCard>
          );
        })}
      </Flex>
    </FormControl>
  );
};

export default RadioGroupStack;
