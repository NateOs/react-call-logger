import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

function TabsMenu() {
  return (
    <Tabs variant="soft-rounded" colorScheme="green">
      <TabList>
        <Tab>Calls</Tab>
        <Tab>Logs</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          {/* form starts here */}
          <FormControl>
            <FormLabel>Customer name</FormLabel>
            <Input type="text" placeholder="John Doe" />
          </FormControl>
          <FormControl>
            <FormLabel>Caller phone</FormLabel>
            <Input type="text" placeholder="John Doe" />
          </FormControl>
          <FormControl>
            <FormLabel>Issue description</FormLabel>
            <Textarea placeholder="You can start by typing: Customer states..." />{" "}
          </FormControl>
          <FormControl>
            <FormLabel>Status</FormLabel>
            <Select placeholder="Select option">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>{" "}
            <FormHelperText>Please be as detailed as possible.</FormHelperText>
          </FormControl>
          {/* form starts ends here */}
        </TabPanel>
        <TabPanel>
          <p>two!</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabsMenu;
