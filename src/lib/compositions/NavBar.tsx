import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import Logo from "@components/logo/Logo";
import { MAX_WIDTH } from "@helpers/ui-values";
import { useLockedBody } from "@hooks";
import NextLink from "next/link";
import type { FC } from "react";
import { useEffect } from "react";
import { Menu as MenuIcon, X, ArrowRightCircle } from "react-feather";

const Links = ["Dashboard", "Projects", "Team"];

const NavBar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setLocked } = useLockedBody();

  useEffect(() => {
    setLocked(isOpen);

    return () => setLocked(false);
  }, [isOpen, setLocked]);

  return (
    <Box as="header" pos="relative" zIndex="1">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        maxW={MAX_WIDTH}
        mx="auto"
        px="30px"
        height="90px"
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

          <CTA
            href=""
            variant="primary"
            isSmall
            icon="arrow"
            customStyles={{
              display: ["none", null, "flex"],
            }}
          >
            Book a call
          </CTA>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box
          pb="30px"
          px="30px"
          display={{ md: "none" }}
          pos="absolute"
          bottom="0"
          left="0"
          w="full"
          height="calc(100vh - 90px)"
          transform="translateY(100%)"
          backgroundColor="white"
        >
          <Flex
            as="nav"
            direction="column"
            alignItems="stretch"
            gap={4}
            h="full"
            justifyContent="flex-start"
            pt={10}
          >
            {Links.map((link) => (
              <Link
                as={NextLink}
                key={link}
                href={`/${link}`}
                fontSize="42px"
                display="flex"
                alignItems="center"
                gap={4}
              >
                {link}
                <ArrowRightCircle
                  height="30px"
                  width="30px"
                  fill="#00C4A2"
                  stroke="white"
                />
              </Link>
            ))}

            <CTA
              href=""
              variant="secondary"
              icon="plus"
              customStyles={{ my: 2 }}
            >
              Start your first project
            </CTA>
            <CTA href="" variant="primary" icon="arrow">
              Book a call
            </CTA>
          </Flex>
        </Box>
      ) : null}
    </Box>
  );
};

export default NavBar;
