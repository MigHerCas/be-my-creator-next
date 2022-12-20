import {
  Avatar,
  AvatarBadge,
  Spacer,
  Stack,
  VisuallyHidden,
} from "@chakra-ui/react";
import type { DialogProps } from "@reach/dialog";
import { DialogContent, DialogOverlay } from "@reach/dialog";
import type { FC } from "react";
import { useState } from "react";

// Styles
import "@reach/dialog/styles.css";
import styles from "./styles.module.css";

interface Props {
  children: React.ReactNode;
}

const VideoModal: FC<Props> = ({ children }) => {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  const dialogOptions = {
    isOpen: showDialog,
    onDismiss: close,
  } as DialogProps;

  return (
    <div>
      <button type="button" onClick={open}>
        Open Dialog
      </button>

      <DialogOverlay className={styles.overlay} {...dialogOptions}>
        <DialogContent className={styles.content}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            spacing={4}
            position="absolute"
            w="full"
            padding={3}
            zIndex="overlay"
            background="linear-gradient(0deg,rgba(0,0,0,0) 0,rgba(0,0,0,.31) 51.56%,rgba(0,0,0,.7) 100%)"
          >
            <Avatar>
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </Avatar>

            <span>Tupi Flower Capuccino</span>

            <Spacer />
            <button
              type="button"
              className={styles.closeButton}
              onClick={close}
            >
              <VisuallyHidden>Close</VisuallyHidden>
              <span aria-hidden>×</span>
            </button>
          </Stack>

          {children}

          <div className={styles.footerContent}>
            <p>Like this?</p>
            <a>Try this out</a>
          </div>
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

export default VideoModal;
