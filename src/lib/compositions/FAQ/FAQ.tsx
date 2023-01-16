import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import type { FC } from "react";

// 3 tabs
// 4 collapsibles
// + and - icons

const FAQ: FC = () => {
  return (
    <Box>
      <Tabs
        variant="solid-rounded"
        isFitted
        isLazy
        w="fit-content"
        mx="auto"
        justifyContent="center"
      >
        <TabList
          p="10px"
          border="1px solid"
          borderColor="gray.200"
          borderRadius={["20px", "100px"]}
          gap="10px"
          justifyContent="center"
        >
          <Tab
            _selected={{ bg: "gray.800", color: "white" }}
            p="12px 30px"
            flex={0}
          >
            Agencies
          </Tab>
          <Tab
            _selected={{ bg: "gray.800", color: "white" }}
            p="12px 30px"
            flex={0}
          >
            Brands
          </Tab>
          <Tab
            _selected={{ bg: "gray.800", color: "white" }}
            p="12px 30px"
            flex={0}
          >
            Creators
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <p>one!</p>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default FAQ;
