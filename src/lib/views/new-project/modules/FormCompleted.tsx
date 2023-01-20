import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import CalendlyIntegration from "@compositions/CalendlyIntegration";
import type { FC } from "react";
import { Check } from "react-feather";

const FormCompleted: FC = () => {
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
      <Box p={[4, null, 8]} bgColor="#00C4A2" borderRadius="full">
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