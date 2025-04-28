import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/react.svg";

const IconName = ({ scrollToSection }) => {
  return (
    <HStack>
      <Image
        src={Logo}
        onClick={() => {
          scrollToSection("brand");
        }}
      />
      <Text
        fontSize="xl"
        fontWeight="bold"
        onClick={() => {
          scrollToSection("brand");
        }}
      >
        Impalers
      </Text>
    </HStack>
  );
};

export default IconName;
