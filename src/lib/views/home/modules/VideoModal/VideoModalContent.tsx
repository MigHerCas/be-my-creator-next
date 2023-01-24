import { Flex, Box } from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";

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
  const circleBackgroundStyles = {
    content: "''",
    position: "absolute",
    width: ["400px", null, "600px"],
    height: ["400px", null, "600px"],
    border: "30px solid #00C4A2",
    top: "50%",
    left: "50%",
    backgroundColor: "white",
    zIndex: "-1",
    borderRadius: "50%",
    transform: "translate(-50%, -50%)",
  };

  return (
    <Flex w="100vw" h="100vh" justifyContent="space-between" overflow="hidden">
      <Flex
        pos="relative"
        p={0}
        flex={1}
        borderRadius="20px"
        overflow="hidden"
        justifyContent="center"
        alignItems="center"
      >
        <Box pos="absolute" w="100%" h="100%" onClick={onClose} />
        <Box
          pos="relative"
          maxW="406px"
          zIndex={2}
          _before={circleBackgroundStyles}
        >
          {children}
        </Box>
      </Flex>
      <VideoModalDrawer isOpen={isOpen} />
    </Flex>
  );
};

export default VideoModalContent;
