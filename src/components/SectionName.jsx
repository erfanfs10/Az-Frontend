import React from "react";
import { Text, Flex, Separator } from "@chakra-ui/react";

const SectionName = ({ title }) => {
  return (
    <>
      <Separator size="sm" my="30px" />
      <Flex justifyContent="center">
        <Text
          borderRadius="lg"
          shadow="md"
          width="fit-content"
          px="6"
          py="2"
          fontSize="xl"
          fontWeight="bold"
          bg={{_light: "gray.300", _dark: "gray.600"}}
        >
          {title}
        </Text>
      </Flex>
    </>
  );
};

export default SectionName;
