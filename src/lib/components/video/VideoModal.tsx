import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import type { FC, PropsWithChildren } from "react";

const VideoModal: FC<PropsWithChildren> = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button type="button" onClick={onOpen} variant="solid">
        Open Dialog
      </Button>

      <Modal
        isCentered
        motionPreset="slideInBottom"
        blockScrollOnMount
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay className="glassmorphic--light" bg="blackAlpha.300" />
        <ModalContent
          pos="relative"
          isolation="isolate"
          borderRadius="20px"
          overflow="hidden"
          maxW="406px"
        >
          <ModalCloseButton
            pos="absolute"
            top="15px"
            right="15px"
            zIndex="1"
            color="white"
          />
          <ModalBody p={0}>{children}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default VideoModal;
