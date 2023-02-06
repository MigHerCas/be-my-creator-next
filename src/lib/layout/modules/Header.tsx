import {
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import Blob from "@components/blob/Blob";
import CTA from "@components/cta/CTA";
import Logo from "@components/logo/Logo";
import { APP_MAX_WIDTH, HEADER_HEIGHT, themeColors } from "@helpers/ui-values";
import { useLockedBody } from "@hooks";
import NextLink from "next/link";
import { useRouter } from "next/router";
import type { FC, SyntheticEvent } from "react";
import { useEffect } from "react";
import { ArrowRightCircle, Menu as MenuIcon, X } from "react-feather";

const LINKS = ["Blog", "Projects", "Team"];

// ~~~~~~~~~~~~~~~~~~~~ DESKTOP ~~~~~~~~~~~~~~~~~~~~

interface DesktopNavigationProps {
  mainCTA: CTAInfo;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  closeMenuOnClickCallback: (e: SyntheticEvent, link: string) => void;
}

const DesktopNavigation = ({
  mainCTA,
  isOpen,
  onClose,
  onOpen,
  closeMenuOnClickCallback,
}: DesktopNavigationProps) => (
  <Flex
    alignItems="center"
    justifyContent="space-between"
    maxW={APP_MAX_WIDTH}
    mx="auto"
    px="30px"
    height={HEADER_HEIGHT}
  >
    <IconButton
      size="md"
      icon={isOpen ? <X /> : <MenuIcon />}
      aria-label="Open Menu"
      display={{ base: "flex", md: "none" }}
      onClick={isOpen ? onClose : onOpen}
    />

    <Box m={{ base: "auto", md: "0" }}>
      <Logo onClickCallback={(e) => closeMenuOnClickCallback(e, "/")} />
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
  closeMenuOnClickCallback: (e: SyntheticEvent, link: string) => void;
}

const MobileNavigation = ({
  isOpen,
  closeMenuOnClickCallback,
}: MobileNavigationProps) => {
  const backgroundColor = useColorModeValue("white", themeColors.darkGrey);

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
      height={`calc(100vh - ${HEADER_HEIGHT})`}
      transform="translateY(100%)"
      backgroundColor={backgroundColor}
    >
      <Box
        pos="absolute"
        bottom={0}
        right={0}
        w="600px"
        h="600px"
        transform="translate(40%, 40%)"
      >
        <Blob type={0} isInverted />
      </Box>
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
            onClick={(e) => closeMenuOnClickCallback(e, link)}
          >
            {link}
            <ArrowRightCircle
              height="30px"
              width="30px"
              fill={themeColors.primary}
              stroke={backgroundColor}
            />
          </Link>
        ))}
        <CTA
          href="/new-project"
          variant="secondary"
          icon="plus"
          customStyles={{ my: 2 }}
          onClick={(e) => closeMenuOnClickCallback(e, "/new-project")}
        >
          Start your first project
        </CTA>
        <CTA
          href="/strategy-call"
          variant="primary"
          icon="arrow"
          onClick={(e) => closeMenuOnClickCallback(e, "/strategy-call")}
        >
          Free Strategy Call
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
  const router = useRouter();

  const closeMenuOnClickCallback = (e: SyntheticEvent, link: string) => {
    e.preventDefault();
    onClose();
    router.push(`/${link}`);
  };

  const { setLocked } = useLockedBody();

  useEffect(() => {
    setLocked(isOpen);

    return () => setLocked(false);
  }, [isOpen, setLocked]);

  return (
    <Box as="header" pos="relative" zIndex="1">
      <MobileNavigation
        isOpen={isOpen}
        closeMenuOnClickCallback={closeMenuOnClickCallback}
      />
      <DesktopNavigation
        mainCTA={mainCTA}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        closeMenuOnClickCallback={closeMenuOnClickCallback}
      />
    </Box>
  );
};

export default Header;
