import { Badge, Flex, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import type { FC } from "react";
import { ArrowRight } from "react-feather";

const CatchyBanner: FC = () => {
  return (
    <Flex
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

      <Link
        href="/"
        display={["none", null, null, null, "flex"]}
        as={NextLink}
        color="#00C4A2"
        fontWeight={600}
        alignItems="center"
        gap={1}
      >
        Check it out
        <ArrowRight stroke="#00C4A2" />
      </Link>
    </Flex>
  );
};

export default CatchyBanner;
