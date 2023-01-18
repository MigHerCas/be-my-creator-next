import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
} from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import Logo from "@components/logo/Logo";
import { MAX_WIDTH } from "@helpers/ui-values";
import { useLockedBody } from "@hooks";
import NextLink from "next/link";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useEffect } from "react";
import { Menu as MenuIcon, X, ArrowRightCircle } from "react-feather";

const LINKS = ["Blog", "Projects", "Team"];

// ~~~~~~~~~~~~~~~~~~~~ DESKTOP ~~~~~~~~~~~~~~~~~~~~

interface DesktopNavigationProps {
  mainCTA: CTAInfo;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const DesktopNavigation = ({
  mainCTA,
  isOpen,
  onClose,
  onOpen,
}: DesktopNavigationProps) => (
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

    <Box m={{ base: "auto", md: "0" }}>
      <Logo />
    </Box>
    <Flex alignItems="center" gap={4}>
      <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
        {LINKS.map((link) => (
          <Link
            key={link}
            href={`/${link.toLowerCase()}`}
            as={NextLink}
            p={4}
            prefetch={false}
          >
            {link}
          </Link>
        ))}
      </HStack>

      <CTA
        href={mainCTA.href}
        variant="primary"
        isSmall
        icon="arrow"
        customStyles={{
          display: ["none", null, "flex"],
        }}
      >
        {mainCTA.text}
      </CTA>
    </Flex>
  </Flex>
);

// ~~~~~~~~~~~~~~~~~~~~ MOBILE ~~~~~~~~~~~~~~~~~~~~

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation = ({ isOpen, onClose }: MobileNavigationProps) => {
  const router = useRouter();
  const backgroundColor = useColorModeValue("white", "#272727");

  if (!isOpen) return null;

  return (
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
      backgroundColor={backgroundColor}
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
        {LINKS.map((link) => (
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
              stroke={backgroundColor}
            />
          </Link>
        ))}
        <CTA
          href="/new-project"
          variant="secondary"
          icon="plus"
          customStyles={{ my: 2 }}
          onClick={(e) => {
            e.preventDefault();
            onClose();
            router.push("/new-project");
          }}
        >
          Start your first project
        </CTA>
        <CTA
          href="/new-call"
          variant="primary"
          icon="arrow"
          onClick={(e) => {
            e.preventDefault();
            onClose();
            router.push("/new-call");
          }}
        >
          Book a call
        </CTA>
      </Flex>
    </Box>
  );
};

// ~~~~~~~~~~~~~~~~~~~~ Header ~~~~~~~~~~~~~~~~~~~~
export type CTAInfo = {
  text: string;
  href: string;
};

interface Props {
  mainCTA: CTAInfo;
}

const Header: FC<Props> = ({ mainCTA }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { setLocked } = useLockedBody();

  useEffect(() => {
    setLocked(isOpen);

    return () => setLocked(false);
  }, [isOpen, setLocked]);

  return (
    <Box as="header" pos="relative" zIndex="1">
      <MobileNavigation isOpen={isOpen} onClose={onClose} />
      <DesktopNavigation
        mainCTA={mainCTA}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Box>
  );
};

export default Header;
