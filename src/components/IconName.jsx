import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/react.svg";

const IconName = ({ scrollToSection }) => {
  return (
    <HStack>
      <Image
        _hover={{ cursor: "pointer" }}
        fit="contain"
        src={Logo}
        onClick={() => {
          scrollToSection("brand");
        }}
        boxSize={{
          base: "25px",
          sm: "25px",
          md: "30px",
          lg: "35px",
          xl: "40xpx",
        }}
      />
      <Text
        _hover={{ cursor: "pointer" }}
        fontSize={{
          base: "md",
          sm: "md",
          md: "md",
          lg: "lg",
          xl: "xl",
        }}
        fontWeight="bold"
        onClick={() => {
          scrollToSection("brand");
        }}
      >
        Devora
      </Text>
    </HStack>
  );
};

export default IconName;
