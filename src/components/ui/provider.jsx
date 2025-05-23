"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeProvider } from "./color-mode";
import { system } from "./theme.js";

export function Provider(props) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider forcedTheme="light" {...props} />
    </ChakraProvider>
  );
}
