import { Badge, Flex, Text } from "@chakra-ui/react";
import { themeColors } from "@helpers/ui-values";

const CatchyBanner = () => {
  return (
    <Flex
      display={["none", null, "flex"]}
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
        bgColor={themeColors.primary}
        px={2.5}
        py={1.5}
        borderRadius="4px"
        letterSpacing="1.1px"
        colorScheme="green"
      >
        New
      </Badge>
      <Text size="sm" mb={0} fontWeight={600}>
        Are you an agency? Let&apos;s work together
      </Text>
    </Flex>
  );
};

export default CatchyBanner;
