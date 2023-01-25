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
import type { FC } from "react";

import { FAQ_CONTENT } from "./FAQ_CONTENT";
import FAQItem from "./FAQItem";

const FAQContainer: FC = () => {
  return (
    <Box as="section" py={["30px", null, "40px", null, "60px"]}>
      {/* Heading */}
      <Heading
        mx="auto"
        maxW="20ch"
        size="md"
        textAlign="center"
        mb={["30px", null, "40px", null, "60px"]}
      >
        Any question?
      </Heading>

      {/* Tab navigation (brands, creators, agencies) */}
      <Tabs
        variant="solid-rounded"
        isFitted
        isLazy
        justifyContent="center"
        mb={["30px", null, "40px", null, "60px"]}
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
                defaultIndex={[0, 3, 4]}
                display="grid"
                gridTemplateColumns={["1fr", null, null, "1fr 1fr"]}
                gap="30px"
                alignItems="flex-start"
              >
                {[leftItems, rightItems].map((items, index) => (
                  <Flex
                    key={`${id}-${index === 0 ? "left" : "right"}`}
                    flexDir="column"
                    gap="30px"
                  >
                    {items.map(({ title, content }) => {
                      return <FAQItem title={title} content={content} />;
                    })}
                  </Flex>
                ))}
              </Accordion>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>

      {/* CTA */}
      <CTA
        variant="primary"
        href="/new-call"
        customStyles={{ mx: "auto" }}
        icon="arrow"
      >
        Still lost? Let&apos;s talk
      </CTA>
    </Box>
  );
};

export default FAQContainer;
