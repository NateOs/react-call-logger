import React from "react";

import TabsMenu from "../components/TabsMenu";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
import { Input } from '@chakra-ui/react'

function Homepage() {
  return (
    <div className="m-10">
      <TabsMenu />
      {/* Form starts here */}
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <Input type="email" />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>
      {/* Form ends here*/}
    </div>
  );
}

export default Homepage;
