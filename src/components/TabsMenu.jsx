import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { FormComponent, RecentCallList, Profile } from "../components";

function TabsMenu() {
  return (
    <div>
      <Tabs variant="soft-rounded" colorScheme="green">
        <TabList>
          <Tab>Calls</Tab>
          <Tab>Logs</Tab>
          <Tab>Profile</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <div className="grid gap-2 md:grid-cols-2 max-w-full">
              <FormComponent />

              <RecentCallList />
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-2 md:grid-cols-2 max-w-full"></div>
          </TabPanel>
          <TabPanel>
            <div className="grid gap-2 md:grid-cols-2 max-w-full">
              <Profile />
            </div>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default TabsMenu;
