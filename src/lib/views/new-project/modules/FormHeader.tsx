import { Flex, Heading, Box } from "@chakra-ui/react";
import type { FC } from "react";
import { Tool } from "react-feather";

const FormHeader: FC = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      gap={[4, null, 6, 8]}
      wrap="wrap"
    >
      <Box
        p={[3, null, null, 5]}
        display="inline-block"
        bgColor="#272727"
        borderRadius="full"
      >
        <Tool height="30px" width="30px" stroke="#BCE500" />
      </Box>
      <Heading size="lg" textAlign="center" mb={0}>
        New project!
      </Heading>
    </Flex>
  );
};

export default FormHeader;
