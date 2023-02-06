import { Box } from "@chakra-ui/react";
import Blob from "@components/blob/Blob";
import { use100vh } from "react-div-100vh";

const FixedBlobs = () => {
  const height = use100vh();

  return (
    <Box
      pos="fixed"
      h={height || "100vh"}
      w="100vw"
      top="0"
      left="0"
      zIndex="-1"
    >
      <Box
        pos="fixed"
        top={["40%", "35%", "25%", null, null, "20%"]}
        left={["-40%", "-30%", "-20%", "-20%", null, "-15%"]}
        w={["300px", "350px", "400px", null, "500px", "600px"]}
        h={["300px", "350px", "400px", null, "500px", "600px"]}
      >
        <Blob type={2} />
      </Box>

      <Box
        pos="fixed"
        bottom="-20%"
        right={["-50%", "-35%", "-20%", "-15%"]}
        w={["300px", "400px", "400px", null, "500px", "600px"]}
        h={["300px", "400px", "400px", null, "500px", "600px"]}
      >
        <Blob type={0} isInverted />
      </Box>
    </Box>
  );
};

export default FixedBlobs;
