import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { SECTION_VERTICAL_SPACING } from "@helpers/ui-values";
import type { FC } from "react";
import { Activity } from "react-feather";

const Integrations: FC = () => {
  const integrationsList = [
    {
      id: "0",
      name: "Integration name 1",
      description: "Integration text 1",
      bgColor: "red.300",
    },
    {
      id: "1",
      name: "Integration name 2",
      description: "Integration text 2",
      bgColor: "red.300",
    },
    {
      id: "2",
      name: "Integration name 3",
      description: "Integration text 3",
      bgColor: "red.300",
    },
    {
      id: "3",
      name: "Integration name 4",
      description: "Integration text 4",
      bgColor: "red.300",
    },
    {
      id: "4",
      name: "Integration name 4",
      description: "Integration text 4",
      bgColor: "red.300",
    },
  ];

  return (
    <Grid
      as="section"
      py={SECTION_VERTICAL_SPACING}
      templateColumns={["1fr", null, null, "1fr 1fr 1fr", "repeat(4, 1fr)"]}
    >
      {/* Heading and description */}
      <Box>
        <Heading size="md" pos="sticky" top="30px" mb={["30px", null, null, 0]}>
          Integrations
        </Heading>
      </Box>

      {/* Integrations grid */}
      <Grid
        gridColumnStart={[1, null, null, 2]}
        gridColumnEnd={-1}
        templateColumns={["1fr", null, "1fr 1fr"]}
        gap="30px"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {integrationsList.map(({ id, name, description, bgColor }) => (
          <Flex
            key={id}
            wrap="wrap"
            padding="20px"
            gap="20px"
            alignItems="center"
            borderRadius="20px"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="gray.200"
            className="glassmorphic"
          >
            <Box p="10px" borderRadius="10px" bgColor={bgColor}>
              <Activity width="30px" height="30px" />
            </Box>
            <Box>
              <Heading size="xs" flexBasis="100%" mb={0}>
                {name}
              </Heading>
              <Text size="sm" mb={0}>
                {description}
              </Text>
            </Box>
          </Flex>
        ))}
      </Grid>
    </Grid>
  );
};

export default Integrations;
