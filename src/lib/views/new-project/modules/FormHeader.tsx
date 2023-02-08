import { Flex, Heading, Box } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { themeColors } from "@helpers/ui-values";
import { Tool } from "react-feather";

const FormHeader = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      w="full"
      position="relative"
      gap={[4, null, 6, 8]}
      wrap="wrap"
    >
      <CTA
        href="/"
        variant="primary"
        icon="arrowLeft"
        customStyles={{
          position: "absolute",
          top: "50%",
          left: 0,
          padding: "12px",
          transform: "translateY(-50%)",
        }}
      />
      <Box
        p={[3, null, null, 5]}
        display={["none", "inline-block"]}
        bgColor={themeColors.black}
        borderRadius="full"
      >
        <Tool height="30px" width="30px" stroke={themeColors.pistache} />
      </Box>
      <Heading size="lg" textAlign="center" mb={0}>
        New project!
      </Heading>
    </Flex>
  );
};

export default FormHeader;
