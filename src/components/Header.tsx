import { Flex, Heading, Link } from "@chakra-ui/react";
import DarkModeSwitch from "./DarkModeSwitch";

function Header() {
  return (
    <>
      <Flex
        direction="row"
        pt="20px"
        justifyContent="space-around"
        alignItems="center"
      >
        <Link href="/" textDecoration="none">
          <Heading>Hacker News</Heading>
        </Link>

        <DarkModeSwitch />
      </Flex>
    </>
  );
}
export default Header;
