import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const VideoModalWrapper: FC<PropsWithChildren<Props>> = ({
  children,
  isOpen,
  onClose,
}) => {
  return (
    <Modal
      size="full"
      isCentered
      motionPreset="scale"
      blockScrollOnMount
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc
      closeOnOverlayClick
      autoFocus={false}
      returnFocusOnClose={false}
    >
      <ModalOverlay className="glassmorphic" bg="blackAlpha.200" />

      <ModalContent
        pos="relative"
        isolation="isolate"
        borderRadius="20px"
        maxH="100vh"
        bgColor="transparent"
        maxW="100vw"
      >
        <ModalCloseButton
          pos="absolute"
          top="30px"
          right="30px"
          zIndex={2}
          bgColor="#272727"
          p={2}
          color="white"
        />

        <ModalBody p={0} isolation="isolate">
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VideoModalWrapper;
