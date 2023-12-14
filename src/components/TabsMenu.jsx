import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Homepage from "../pages/Homepage";

function TabsMenu() {
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Calls</Tab>
          <Tab>Logs</Tab>
          <Tab>User Profile</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Homepage />
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
    </div>
  );
}

export default TabsMenu;
