import React from "react";
import { Flex, HStack, Icon, Separator, Text } from "@chakra-ui/react";
import IconName from "./IconName";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare, FaTelegram } from "react-icons/fa";

const Footer = ({scrollToSection}) => {
  return (
    <>
      <Separator size="sm" mt="20px" borderColor="gray.400/30" />
      <Flex m="10px" justifyContent="space-between" alignItems="center">
        <IconName scrollToSection={scrollToSection}/>
        <HStack>
          <Icon size="lg">
            <FaSquareXTwitter />
          </Icon>
          <Icon size="lg">
            <FaInstagramSquare />
          </Icon>
          <Icon size="lg">
            <FaTelegram />
          </Icon>
        </HStack>
      </Flex>
    </>
  );
};

export default Footer;
