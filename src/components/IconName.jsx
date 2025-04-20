import React from "react";
import { HStack, Image, Text } from "@chakra-ui/react";
import Logo from "../assets/react.svg";

const IconName = () => {
  return (
    <HStack>
      <Image src={Logo} />
      <Text fontSize="xl" fontWeight="bold">
        Impalers
      </Text>
    </HStack>
  );
};

export default IconName;
