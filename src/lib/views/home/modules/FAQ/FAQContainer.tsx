import {
  Accordion,
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import CTA from "@components/cta/CTA";
import { SECTION_VERTICAL_SPACING } from "@helpers/ui-values";
import { Routes } from "@routes";

import { FAQ_CONTENT } from "./FAQ_CONTENT";
import FAQItem from "./FAQItem";

const FAQContainer = () => {
  return (
    <Box as="section" py={SECTION_VERTICAL_SPACING}>
      {/* Heading */}
      <Heading
        mx="auto"
        maxW="20ch"
        size="md"
        textAlign="center"
        mb={SECTION_VERTICAL_SPACING}
      >
        Any question?
      </Heading>

      {/* Tab navigation (brands, creators, agencies) */}
      <Tabs
        variant="solid-rounded"
        isFitted
        isLazy
        justifyContent="center"
        mb={SECTION_VERTICAL_SPACING}
      >
        <TabList
          p="10px"
          border="1px solid"
          borderColor="gray.200"
          bgColor="white"
          w="fit-content"
          borderRadius={["20px", null, "100px"]}
          gap="10px"
          mx="auto"
          mb="30px"
          flexWrap="wrap"
          justifyContent="center"
        >
          {FAQ_CONTENT.map(({ tabTitle }) => (
            <Tab
              key={tabTitle}
              _selected={{ bg: "gray.800", color: "white" }}
              p="12px 30px"
              flex="0 0 auto"
            >
              {tabTitle}
            </Tab>
          ))}
        </TabList>

        {/* FAQ content (inside each tab) */}
        <TabPanels>
          {FAQ_CONTENT.map(({ id, leftItems, rightItems }) => (
            <TabPanel p={0} key={id}>
              <Accordion
                allowMultiple
                defaultIndex={[0, 1, 2]}
                display="grid"
                gridTemplateColumns={["1fr", null, null, "1fr 1fr"]}
                gap="30px"
                alignItems="flex-start"
              >
                {[leftItems, rightItems].map((items, index) => {
                  if (!items || !items.length) {
                    return null;
                  }

                  return (
                    <Flex
                      key={`${id}-${index === 0 ? "left" : "right"}`}
                      flexDir="column"
                      gap="30px"
                    >
                      {items.map(({ title, content }) => {
                        return (
                          <FAQItem
                            key={title}
                            title={title}
                            content={content}
                          />
                        );
                      })}
                    </Flex>
                  );
                })}
              </Accordion>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      {/* CTA */}
      <CTA
        variant="primary"
        href={Routes.strategyCall}
        customStyles={{ mx: "auto" }}
        icon="arrow"
      >
        Still lost? Let&apos;s talk
      </CTA>
    </Box>
  );
};

export default FAQContainer;
