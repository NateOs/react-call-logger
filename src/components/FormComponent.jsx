import React from "react";
import { Input, Textarea, Select } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";
function FormComponent() {
  return (
    <div>
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
        <FormHelperText>"new" is default for any new case</FormHelperText>
      </FormControl>
    </div>
  );
}

export default FormComponent;
