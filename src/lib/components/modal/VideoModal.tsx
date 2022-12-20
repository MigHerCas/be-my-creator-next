import { VisuallyHidden } from "@chakra-ui/react";
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
          <button type="button" className={styles.closeButton} onClick={close}>
            <VisuallyHidden>Close</VisuallyHidden>
            <span aria-hidden>×</span>
          </button>
          {children}
        </DialogContent>
      </DialogOverlay>
    </div>
  );
};

export default VideoModal;
