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
          bgColor="gray.300"
          px="6"
          py="2"
          fontSize="xl"
          fontWeight="bold"
        >
          {title}
        </Text>
      </Flex>
    </>
  );
};

export default SectionName;
