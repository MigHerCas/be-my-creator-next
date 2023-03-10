import { Box, Divider, Fade, Flex, Heading, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { themeColors } from "@helpers/ui-values";
import { Routes } from "@routes";
import { use100vh } from "react-div-100vh";

interface Props {
  isOpen: boolean;
}

const VideoModalDrawer = ({ isOpen }: Props) => {
  const height = use100vh();
  return (
    <Fade in={isOpen}>
      <Box
        width="500px"
        flexShrink={0}
        height={height || "100vh"}
        display={{ base: "none", "2xl": "block" }}
        bgColor="white"
        zIndex={4}
        p="60px 30px 30px 60px"
        borderLeft={`30px solid ${themeColors.primary}`}
      >
        <Flex justifyContent="space-between" flexDir="column" gap="30px">
          <Box>
            <Heading size="md">Create your first campaign</Heading>
            <Text size="md" mb="30px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              distinctio ducimus amet possimus non, voluptatibus nobis alias
              maxime.
            </Text>
            <CTA href={Routes.newProject} variant="primary" icon="plus" showDot>
              Start now
            </CTA>
          </Box>

          <Divider />
          <Box>
            <Heading size="md">Meet us</Heading>
            <Text size="md" mb="30px">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              distinctio ducimus amet possimus non, voluptatibus nobis alias
              maxime.
            </Text>
            <CTA href={Routes.strategyCall} variant="secondary" icon="arrow">
              Free Strategy Call
            </CTA>
          </Box>
        </Flex>
      </Box>
    </Fade>
  );
};

export default VideoModalDrawer;
