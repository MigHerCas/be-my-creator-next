import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useColorModeValue,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import Logo from "@components/logo/Logo";
import { MAX_WIDTH } from "@helpers/ui-values";
import NextLink from "next/link";
import type { FC } from "react";
import { Menu as MenuIcon, X } from "react-feather";

const Links = ["Dashboard", "Projects", "Team"];

const NavBar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW={MAX_WIDTH}
        mx="auto"
        px="30px"
      >
        <IconButton
          size="md"
          icon={isOpen ? <X /> : <MenuIcon />}
          aria-label="Open Menu"
          display={{ base: "flex", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <Box>
          <Logo />
        </Box>
        <Flex alignItems="center" gap={4}>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            {Links.map((link) => (
              <Link key={link} href={`/${link}`} as={NextLink} p={4}>
                {link}
              </Link>
            ))}
          </HStack>

          <CTA href="" showArrow={false}>
            Book a call
          </CTA>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb="30px" px="30px" display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {Links.map((link) => (
              <Link as={NextLink} key={link} href={`/${link}`}>
                {link}
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;
