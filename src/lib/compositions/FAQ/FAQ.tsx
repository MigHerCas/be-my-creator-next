import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Heading,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import type { FC } from "react";
import { Plus, Minus } from "react-feather";

import { FAQ_CONTENT } from "./FAQ_CONTENT";

const FAQ: FC = () => {
  return (
    <Box>
      <Tabs variant="solid-rounded" isFitted isLazy justifyContent="center">
        <TabList
          p="10px"
          border="1px solid"
          borderColor="gray.200"
          w="fit-content"
          borderRadius={["20px", "100px"]}
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

        <TabPanels>
          {FAQ_CONTENT.map(({ id, items }) => (
            <TabPanel p={0} key={id}>
              <Accordion
                allowMultiple
                allowToggle
                display="grid"
                gridTemplateColumns={["1fr", null, null, "1fr 1fr"]}
                gap="30px"
                alignItems="flex-start"
              >
                {items.map(({ title, content }) => {
                  return (
                    <AccordionItem
                      borderWidth="1px"
                      borderStyle="solid"
                      borderColor="gray.200"
                      borderRadius="20px"
                      backgroundColor="white"
                      cursor="pointer"
                    >
                      {({ isExpanded }) => (
                        <>
                          <Box>
                            <AccordionButton
                              _hover={{ bgColor: "inherit" }}
                              p="30px"
                              as="div"
                              flexWrap="nowrap"
                            >
                              <Heading
                                size="sm"
                                as="h4"
                                flex="1"
                                textAlign="left"
                                fontSize="1.3125rem"
                                mb={0}
                              >
                                {title}
                              </Heading>

                              <IconButton
                                boxSize="40px"
                                aria-label="theme toggle"
                                bgColor="gray.800"
                                borderRadius="full"
                                _hover={{ bgColor: "gray.800" }}
                                _active={{ bgColor: "gray.800" }}
                              >
                                {isExpanded ? (
                                  <Minus stroke="white" />
                                ) : (
                                  <Plus stroke="white" />
                                )}
                              </IconButton>
                            </AccordionButton>
                          </Box>
                          <AccordionPanel
                            px="30px"
                            pb="30px"
                            pt={0}
                            fontSize="1.125rem"
                          >
                            {content}
                          </AccordionPanel>
                        </>
                      )}
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default FAQ;
