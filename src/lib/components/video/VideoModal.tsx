import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import type { FC, PropsWithChildren } from "react";

import VideoModalDrawer from "./VideoModalDrawer";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModal: FC<PropsWithChildren<Props>> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      isCentered
      motionPreset="slideInBottom"
      blockScrollOnMount
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc
      closeOnOverlayClick
    >
      <ModalOverlay className="glassmorphic" bg="blackAlpha.200">
        <VideoModalDrawer isOpen={isOpen} />
      </ModalOverlay>

      <ModalContent
        pos="relative"
        width="auto"
        isolation="isolate"
        borderRadius="20px"
        maxHeight="100vh"
      >
        <ModalCloseButton
          pos="absolute"
          top="15px"
          right="15px"
          zIndex="1"
          bgColor="#272727"
          p={2}
          color="white"
        />

        <ModalBody
          p={0}
          borderRadius="20px"
          overflow="hidden"
          maxW="406px"
          _before={{
            content: "''",
            position: "absolute",
            width: "calc(100% + 60px)",
            height: "calc(100% + 60px)",
            border: "32px solid #00C4A2",
            top: "-30px",
            left: "-30px",
            backgroundColor: "#00C4A2",
            zIndex: "-1",
            borderRadius: "45px",
          }}
        >
          {children}
        </ModalBody>

        <ModalFooter
          bgColor="#00C4A2"
          p="30px 0 0"
          display="flex"
          justifyContent="center"
        >
          <CTA href="/new-project" variant="primary" icon="plus" showDot>
            Start now
          </CTA>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default VideoModal;
