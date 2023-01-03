import { Box } from "@chakra-ui/react";
import Blob from "@components/blob/Blob";
import type { FC } from "react";

const FixedBlobs: FC = () => {
  return (
    <>
      <Box
        pos="fixed"
        bottom={["500px", "400px", "300px", null, null, "30%"]}
        left={["-150px", "-150px", "-150px", "-20%", null, "-10%"]}
        w={["300px", "350px", "400px", null, "500px", "600px"]}
        h={["300px", "350px", "400px", null, "500px", "600px"]}
        zIndex="-1"
        transition="all 350ms ease"
      >
        <Blob type={2} />
      </Box>

      <Box
        pos="fixed"
        top={["400px", null, "50%"]}
        right={["-150px", "-200px", "-20%", "-10%"]}
        w={["300px", "400px", "400px", null, "500px", "600px"]}
        h={["300px", "400px", "400px", null, "500px", "600px"]}
        zIndex="-1"
        transition="all 350ms ease"
      >
        <Blob type={0} isInverted />
      </Box>
    </>
  );
};

export default FixedBlobs;
