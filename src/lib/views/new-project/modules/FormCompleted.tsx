import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { themeColors } from "@helpers/ui-values";
import { Check } from "react-feather";

import CalendlyIntegration from "lib/shared/modules/CalendlyIntegration";

const FormCompleted = () => {
  return (
    <Flex
      fontSize="40px"
      flexDir="column"
      gap="30px"
      py="60px"
      minHeight="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Box p={[4, null, 8]} bgColor={themeColors.primary} borderRadius="full">
        <Check width={30} height={30} />
      </Box>
      <Heading size="lg" textAlign="center" mb={0}>
        Completed!
      </Heading>
      <Text>We will contact you now. Book a call with us now!</Text>

      <CalendlyIntegration />
      <CTA href="/" variant="primary" icon="arrow">
        Back home
      </CTA>
    </Flex>
  );
};

export default FormCompleted;
