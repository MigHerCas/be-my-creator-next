import {
  Flex,
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/react";
import Logo from "@components/logo/Logo";
import IconSocial from "@components/social/IconsSocial";
import { APP_MAX_WIDTH } from "@helpers/ui-values";
import NextLink from "next/link";

const Footer = () => {
  return (
    <Grid
      as="footer"
      className="glassmorphic"
      maxW={APP_MAX_WIDTH}
      mx="auto"
      borderRadius={["0", null, null, null, "20px"]}
      p={["30px", null, "60px"]}
      mb={["0", null, null, null, "60px"]}
      gridTemplateColumns={["repeat(2, 1fr)", null, null, "repeat(12, 1fr)"]}
      gap={["18px", null, null, "36px"]}
    >
      {/* Company info */}
      <GridItem colStart={1} colEnd={[3, null, null, 5]}>
        <Logo />
        <Text size="md" mb={8} maxWidth="40ch">
          BMC is a first-class agency which helps companies throughout their
          growth path in the online world.
        </Text>

        {/* Social icons */}
        <Stack
          role="list"
          direction="row"
          gap={4}
          alignItems="center"
          listStyleType="none"
        >
          {/* TODO: set links */}
          <StackItem as="li">
            <IconSocial href="" variant="LinkedIn" />
          </StackItem>
          <StackItem as="li">
            <IconSocial href="" variant="Instagram" />
          </StackItem>
          <StackItem as="li">
            <IconSocial href="" variant="Twitter" />
          </StackItem>
          <StackItem as="li">
            <IconSocial href="" variant="Facebook" />
          </StackItem>
        </Stack>
      </GridItem>

      {/* Footer links */}
      <GridItem
        colStart={[1, null, null, 8]}
        colEnd={[3, null, null, -1]}
        paddingTop={["24px", null, null, "72px"]}
      >
        <Grid
          templateColumns={["1fr 1fr", null, "auto auto auto"]}
          justifyContent={["normal", "space-between"]}
          gap={6}
        >
          <Flex flexDir="column" alignItems="start" listStyleType="none">
            <Heading size="xs" m={0} py="6px">
              Company
            </Heading>
            <Link as={NextLink} href="/legal/terms-and-conditions" py="6px">
              Terms and conditions
            </Link>
            <Link as={NextLink} href="/" py="6px">
              Features
            </Link>
            <Link as={NextLink} href="/" py="6px">
              About
            </Link>
            <Link as={NextLink} href="/" py="6px">
              Pricing
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="start" listStyleType="none">
            <Heading size="xs" m={0} py="6px">
              CMS
            </Heading>
            <Link as={NextLink} href="/" py="6px">
              Merch
            </Link>
            <Link as={NextLink} href="/" py="6px">
              Blog
            </Link>
            <Link as={NextLink} href="/" py="6px">
              Our team
            </Link>
            <Link as={NextLink} href="/" py="6px">
              Contact
            </Link>
          </Flex>
          <Flex flexDir="column" alignItems="start" listStyleType="none">
            <Heading size="xs" m={0} py="6px">
              Template
            </Heading>
            <Link as={NextLink} href="/" py="6px">
              Legal Pages
            </Link>
            <Link as={NextLink} href="/" py="6px">
              Licenses
            </Link>
            <Link as={NextLink} href="/styleguide" py="6px">
              Styleguide
            </Link>
            <Link as={NextLink} href="/" py="6px">
              Changelog
            </Link>
          </Flex>
        </Grid>
      </GridItem>

      <GridItem colStart={1} colEnd={[3, null, null, 5]}>
        <Text fontSize="sm" mb={0} textAlign={["center", null, "initial"]}>
          {new Date().getFullYear()} - Be My Creator
        </Text>
      </GridItem>
    </Grid>
  );
};

export default Footer;
