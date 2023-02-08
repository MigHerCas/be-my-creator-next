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
        pt="80px"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Box pos="absolute" w="100%" h="100%" onClick={onClose} />
        <Box
          pos="relative"
          maxW="406px"
          w="100%"
          minHeight="480px"
          borderRadius="20px 20px 0 0"
          bgColor="gray.200"
          zIndex={2}
        >
          {children}
          <Flex
            pos="absolute"
            bottom={0}
            left={0}
            transform="translateY(100%)"
            w="100%"
            alignItems="center"
            justifyContent="center"
            py={["15px", null, "20px"]}
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
