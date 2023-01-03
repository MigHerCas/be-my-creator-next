import { Box } from "@chakra-ui/react";
import Blob from "@components/blob/Blob";
import type { FC } from "react";

const FixedBlobs: FC = () => {
  return (
    <>
      <Box
        pos="fixed"
        bottom={["50%", "45%", "35%", null, null, "30%"]}
        left={["-40%", "-30%", "-20%", "-20%", null, "-10%"]}
        w={["300px", "350px", "400px", null, "500px", "600px"]}
        h={["300px", "350px", "400px", null, "500px", "600px"]}
        zIndex="-1"
        transitionProperty="bottom left"
        transitionDuration="99999"
        transitionTimingFunction="ease"
      >
        <Blob type={2} />
      </Box>

      <Box
        pos="fixed"
        top={["50%", null, "50%"]}
        right={["-50%", "-35%", "-20%", "-10%"]}
        w={["300px", "400px", "400px", null, "500px", "600px"]}
        h={["300px", "400px", "400px", null, "500px", "600px"]}
        zIndex="-1"
        transitionProperty="bottom left"
        transitionDuration="99999"
        transitionTimingFunction="ease"
      >
        <Blob type={0} isInverted />
      </Box>
    </>
  );
};

export default FixedBlobs;
