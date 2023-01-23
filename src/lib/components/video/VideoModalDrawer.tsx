import { Box, Divider, Fade, Heading, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import type { FC } from "react";

interface Props {
  isOpen: boolean;
}

const VideoModalDrawer: FC<Props> = ({ isOpen }) => {
  return (
    <Fade in={isOpen}>
      <Box
        // pos="fixed"
        top="50%"
        right={0}
        width="500px"
        height="100vh"
        display={{ base: "none", "2xl": "flex" }}
        flexDir="column"
        justifyContent="space-between"
        bgColor="white"
        transform="translateY(-50%)"
        zIndex={4}
        p="60px"
        borderLeft="30px solid #00C4A2"
      >
        <Box>
          <Heading size="md">Create your first campaign</Heading>
          <Text size="md" mb="30px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            distinctio ducimus amet possimus non, voluptatibus nobis alias
            maxime.
          </Text>
          <CTA href="/new-project" variant="primary" icon="plus" showDot>
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
          <CTA href="/new-project" variant="secondary" icon="arrow">
            Book a call
          </CTA>
        </Box>
      </Box>
    </Fade>
  );
};

export default VideoModalDrawer;