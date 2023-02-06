import { Box, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import { SECTION_VERTICAL_SPACING } from "@helpers/ui-values";

import {
  IconAmazonIntegration,
  IconInstagramIntegration,
  IconShopifyIntegration,
  IconTikTokIntegration,
  IconWoocommerceIntegration,
  IconYoutubeIntegration,
} from "./icons";

const Integrations = () => {
  const integrationsList = [
    {
      id: "1",
      name: "Youtube Shorts",
      description: "UGC is perfect for this new Youtube format",
      icon: <IconYoutubeIntegration />,
    },
    {
      id: "2",
      name: "Instagram",
      description: "Promote your UGC for your Reels",
      icon: <IconInstagramIntegration />,
    },
    {
      id: "3",
      name: "TikTok",
      description: "Boost your sales with Spark Ads",
      icon: <IconTikTokIntegration />,
    },
    {
      id: "4",
      name: "Shopify",
      description: "Unlock UGC power in your Shopify store",
      icon: <IconShopifyIntegration />,
    },
    {
      id: "5",
      name: "Amazon",
      description: "Embed user generated content on Amazon",
      icon: <IconAmazonIntegration />,
    },
    {
      id: "6",
      name: "WooCommerce",
      description: "Combine this plugin with UGC",
      icon: <IconWoocommerceIntegration />,
    },
  ];

  return (
    <Grid
      as="section"
      py={SECTION_VERTICAL_SPACING}
      alignItems="stretch"
      templateColumns={[
        "1fr",
        null,
        null,
        "auto auto",
        "auto 1fr 1fr",
        "auto 1fr 1fr 1fr",
      ]}
    >
      {/* Heading and description */}
      <Box>
        <Heading
          size="md"
          pos="sticky"
          top="30px"
          mr="30px"
          mb={["30px", null, null, 0]}
        >
          Integrations
        </Heading>
      </Box>

      {/* Integrations grid */}
      <Grid
        gridColumnStart={[1, null, null, 2]}
        gridColumnEnd={-1}
        templateColumns={["1fr", null, null, null, "1fr 1fr"]}
        gap="20px"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {integrationsList.map(({ id, name, description, icon }) => (
          <Flex
            key={id}
            wrap="wrap"
            padding="20px"
            gap={["15px", null, null, null, "10px", "15px"]}
            alignItems="center"
            borderRadius="20px"
            borderWidth="1px"
            borderStyle="solid"
            borderColor="gray.200"
            className="glassmorphic"
          >
            <Box p="10px" borderRadius="10px" bgColor="gray.100">
              {icon}
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
