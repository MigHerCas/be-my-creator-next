import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import type { FC } from "react";
import { Crosshair, Film, Rss } from "react-feather";

const Steps: FC = () => {
  return (
    <Box as="section" mt={[0, 0, "-30px", "-60px", null, "-60px"]}>
      <Flex as="ol" listStyleType="none" gap="30px" wrap="wrap">
        <Box
          flex="1"
          bgColor="#272727"
          borderRadius="20px"
          p="30px"
          minW="260px"
        >
          <Box
            p={3}
            display="inline-block"
            bgColor="#1C1C1C"
            borderRadius="full"
            mb={6}
          >
            <Crosshair stroke="#BCE500" />
          </Box>

          <Heading size="sm" color="white">
            Step 1
          </Heading>
          <Text color="hsla(0, 0%, 100%, 0.5)">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula
          </Text>
        </Box>
        <Box
          flex="1"
          bgColor="#272727"
          borderRadius="20px"
          p="30px"
          minW="260px"
        >
          <Box
            p={3}
            display="inline-block"
            bgColor="#1C1C1C"
            borderRadius="full"
            mb={6}
          >
            <Film stroke="#BCE500" />
          </Box>
          <Heading size="sm" color="white">
            Step 2
          </Heading>
          <Text color="hsla(0, 0%, 100%, 0.5)">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula
          </Text>
        </Box>
        <Box
          flex="1"
          bgColor="#272727"
          borderRadius="20px"
          p="30px"
          minW="260px"
        >
          <Box
            p={3}
            display="inline-block"
            bgColor="#1C1C1C"
            borderRadius="full"
            mb={6}
          >
            <Rss stroke="#BCE500" />
          </Box>
          <Heading size="sm" color="white">
            Step 3
          </Heading>
          <Text color="hsla(0, 0%, 100%, 0.5)">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Steps;
