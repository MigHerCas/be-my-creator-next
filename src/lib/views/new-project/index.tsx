import {
  Flex,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  useRadioGroup,
} from "@chakra-ui/react";
import RadioCard from "@components/radioCard/RadioCard";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Check } from "react-feather";

const NewProjectView: NextPage = () => {
  const options = ["react", "vue", "svelte"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <>
      <NextSeo title="Home" />
      <Flex flexDir="column" gap="30px" p="60px" bgColor="white">
        <Heading size="lg" textAlign="center">
          New project!
        </Heading>
        <InputGroup alignItems="center" display="flex">
          <Input
            placeholder="Input here"
            size="lg"
            height="65px"
            minW="16em"
            py="18px"
            px="16px"
            borderRadius="8px"
          />
          <InputRightElement>
            <Check stroke="#00C4A2" />
          </InputRightElement>
        </InputGroup>

        <HStack {...group}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <RadioCard key={value} {...radio}>
                {value}
              </RadioCard>
            );
          })}
        </HStack>
      </Flex>
    </>
  );
};

export default NewProjectView;
