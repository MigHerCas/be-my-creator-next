import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import type { FC } from "react";

interface Props {
  label: string;
  helperText: string;
  type: string;
  placeholder: string;
}

const InputGroup: FC<Props> = ({ label, helperText, type, placeholder }) => {
  return (
    <FormControl w="60%" mx="auto">
      <FormLabel fontSize="24px" fontWeight="400" mb="30px">
        {label}
      </FormLabel>
      <Input
        type={type}
        placeholder={placeholder}
        display="block"
        fontSize="30px"
        p="0px 0px 8px"
        borderRadius={0}
        border="none"
        outline="none"
        boxShadow="rgb(235 219 173 / 30%) 0px 1px"
        _active={{
          outline: "none",
          border: "none",
          boxShadow: "#00C4A2 0px 2px",
        }}
        _focus={{
          outline: "none",
          border: "none",
          boxShadow: "#00C4A2 0px 2px",
        }}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default InputGroup;
