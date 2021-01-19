import { useColorMode, IconButton, useToast } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  const toast = useToast();

  return (
    <>
      <IconButton
        aria-label="Toggle Dark Switch"
        icon={
          colorMode === "dark" ? <MoonIcon mx="10px" /> : <SunIcon mx="10px" />
        }
        onClick={() => {
          toggleColorMode();
          return toast({
            title: "",
            description: `Switched to ${
              colorMode === "dark" ? "light" : "dark"
            }`,
            position: "bottom-left",
            duration: 1000,
            isClosable: true,
          });
        }}
      />
    </>
  );
}

export default DarkModeSwitch;
