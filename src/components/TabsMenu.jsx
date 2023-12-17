import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { FormComponent, RecentCallList } from "../components";
import RecentCallsList from "./RecentCallList";

function TabsMenu() {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Calls</Tab>
        <Tab>Logs</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <FormComponent />

          <RecentCallList />
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabsMenu;
