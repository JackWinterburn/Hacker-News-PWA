import { Flex, Heading } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";

import React from "react";

function Header() {
  return (
    <>
      <Flex
        direction="row"
        pt="20px"
        justifyContent="space-around"
        alignItems="center"
      >
        <Heading>Hacker News Top Posts</Heading>

        <DarkModeSwitch />
      </Flex>
    </>
  );
}
export default Header;
