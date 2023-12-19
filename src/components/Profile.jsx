import React from "react";
import { Input, Textarea, Select } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

function Profile() {
  return (
    <div>
      <FormControl>
        <FormLabel>Username</FormLabel>
        <Input type="text" placeholder="John Doe" />
      </FormControl>
      <FormControl>
        <FormLabel>Email</FormLabel>
        <Input type="text" placeholder="johndoe@example.com" />
      </FormControl>
      <FormControl mb={5}>
        <FormLabel>Password</FormLabel>
        <Input type="password" />
      </FormControl>
      <div className="grid grid-cols-1">
        <Button colorScheme="blue" mb={5} w={"fit-content"}>
          Button
        </Button>
        <Button colorScheme="blue" mb={5} w={"fit-content"}>
          Button
        </Button>
      </div>
    </div>
  );
}

export default Profile;
