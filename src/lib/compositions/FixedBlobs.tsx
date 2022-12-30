import { Box } from "@chakra-ui/react";
import Blob from "@components/blob/Blob";
import type { FC } from "react";

const FixedBlobs: FC = () => {
  return (
    <>
      <Box
        pos="fixed"
        bottom="30%"
        left="-10%"
        w="600px"
        height="600px"
        zIndex="-1"
      >
        <Blob type={2} />
      </Box>

      <Box
        pos="fixed"
        top="50%"
        right="-10%"
        w="600px"
        height="600px"
        zIndex="-1"
      >
        <Blob type={0} isInverted />
      </Box>
    </>
  );
};

export default FixedBlobs;
