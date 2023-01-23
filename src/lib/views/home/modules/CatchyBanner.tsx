import { Badge, Flex, Text } from "@chakra-ui/react";
import type { FC } from "react";

const CatchyBanner: FC = () => {
  return (
    <Flex
      display={["none", "flex"]}
      flexWrap="wrap"
      justifyContent="center"
      px={4}
      py={3}
      className="glassmorphic"
      borderRadius="8px"
      alignItems="center"
      gap={3}
      width="fit-content"
      mx={["auto", null, null, "initial"]}
      mb={["30px", null, 0]}
    >
      <Badge
        color="white"
        bgColor="#00C4A2"
        px={2.5}
        py={1.5}
        borderRadius="4px"
        letterSpacing="1.1px"
        colorScheme="green"
      >
        New
      </Badge>
      <Text size="sm" mb={0} fontWeight={600}>
        Startups can get up to $25k in credits
      </Text>
    </Flex>
  );
};

export default CatchyBanner;
