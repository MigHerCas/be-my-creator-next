import { Box } from "@chakra-ui/react";
import Blob from "@components/blob/Blob";
import type { FC } from "react";
import { use100vh } from "react-div-100vh";

interface Props {
  hideBlobsOnMobile?: boolean;
  hideBlobs?: boolean;
}
const FixedBlobs: FC<Props> = ({
  hideBlobsOnMobile = false,
  hideBlobs = false,
}) => {
  const height = use100vh();

  if (hideBlobs) return null;

  return (
    <Box
      display={hideBlobsOnMobile ? ["none", null, null, "block"] : "block"}
      pos="fixed"
      h={height || "100vh"}
      w="100vw"
      top="0"
      left="0"
      zIndex="-1"
    >
      <Box
        pos="fixed"
        bottom={["50%", "45%", "35%", null, null, "30%"]}
        left={["-40%", "-30%", "-20%", "-20%", null, "-10%"]}
        w={["300px", "350px", "400px", null, "500px", "600px"]}
        h={["300px", "350px", "400px", null, "500px", "600px"]}
      >
        <Blob type={2} />
      </Box>

      <Box
        pos="fixed"
        top={["50%", null, "50%"]}
        right={["-50%", "-35%", "-20%", "-10%"]}
        w={["300px", "400px", "400px", null, "500px", "600px"]}
        h={["300px", "400px", "400px", null, "500px", "600px"]}
      >
        <Blob type={0} isInverted />
      </Box>
    </Box>
  );
};

export default FixedBlobs;
