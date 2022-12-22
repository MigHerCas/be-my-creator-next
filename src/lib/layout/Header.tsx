import NextLink from "next/link";
import { Flex, Spacer, HStack, Link } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import Logo from "@components/logo/Logo";

import ThemeToggle from "@components/themeToggle/ThemeToggle";
import { MAX_WIDTH } from "@helpers/ui-values";
import WithSubnavigation from "@templates/NavBar";

const Header = () => {
  return (
    <Flex
      as="header"
      maxW={MAX_WIDTH}
      px="30px"
      mx="auto"
      width="full"
      align="center"
    >
      <Logo />
      <ThemeToggle />
      <Spacer />
      <Flex as="nav" role="navigation" gap={8}>
        {/* Navigation links */}
        <HStack as="ol" listStyleType="none">
          <Link href="/" as={NextLink} p={4}>
            Link 1
          </Link>
          <Link href="/" as={NextLink} p={4}>
            Link 2
          </Link>
          <Link href="/" as={NextLink} p={4}>
            Link 3
          </Link>
          <Link href="/" as={NextLink} p={4}>
            Link 4
          </Link>
          <Link href="/styleguide" as={NextLink} p={4}>
            Styleguide
          </Link>
        </HStack>

        <Spacer />

        {/* Main CTA */}
        <HStack as="ol" listStyleType="none">
          <CTA href="">Log in as a Brand</CTA>
        </HStack>
      </Flex>
    </Flex>
  );
};

const HeaderTemplate = () => {
  return <WithSubnavigation />;
};

export { Header, HeaderTemplate };
