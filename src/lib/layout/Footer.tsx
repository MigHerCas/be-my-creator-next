import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" justifyContent="center">
      <Text fontSize="sm" color="gray.500">
        {new Date().getFullYear()} - Be My Creator
      </Text>
    </Flex>
  );
};

export default Footer;
