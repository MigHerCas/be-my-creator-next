import { Flex, Box, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { themeColors } from "@helpers/ui-values";
import type { FC, PropsWithChildren } from "react";
import { use100vh } from "react-div-100vh";

import VideoModalDrawer from "./VideoModalDrawer";

interface Props {
  isOpen: boolean;
  onClose(): void;
}

const VideoModalContent: FC<PropsWithChildren<Props>> = ({
  isOpen,
  onClose,
  children,
}) => {
  const height = use100vh();
  const circleBackgroundStyles = {
    content: "''",
    position: "absolute",
    width: ["500px", "550px", "600px"],
    height: ["500px", "550px", "600px"],
    border: `30px solid ${themeColors.primary}`,
    top: "50%",
    left: "50%",
    backgroundColor: "white",
    zIndex: "-2",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Flex
      w="100vw"
      h={height || "100vh"}
      justifyContent="space-between"
      overflow="hidden"
    >
      <Flex
        pos="relative"
        py={0}
        px="20px"
        flex={1}
        flexDirection="column"
        borderRadius="20px"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
      >
        <Box pos="absolute" w="100%" h="100%" onClick={onClose} />
        <Box
          pos="relative"
          maxW="406px"
          borderRadius="20px"
          bgColor="gray.200"
          zIndex={2}
          _before={circleBackgroundStyles}
        >
          {children}
          <Flex
            w="100%"
            alignItems="center"
            justifyContent="center"
            py="20px"
            bgColor={themeColors.darkGrey}
            borderRadius="0 0 20px 20px"
            gap="12px"
          >
            <Text size="md" mb={0} color="white">
              Like it?
            </Text>
            <CTA href="/new-project" variant="secondary" icon="arrow" isSmall>
              Try it for free!
            </CTA>
          </Flex>
        </Box>
      </Flex>
      <VideoModalDrawer isOpen={isOpen} />
    </Flex>
  );
};

export default VideoModalContent;
