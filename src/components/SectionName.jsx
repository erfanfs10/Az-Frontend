import React from "react";
import { Text, Flex, Separator } from "@chakra-ui/react";

const SectionName = ({ title }) => {
  return (
    <>
      <Separator size="md" my="30px" borderColor="gray.400/30" />
      <Flex justifyContent="center">
        <Text
          borderRadius="lg"
          shadow="md"
          width="fit-content"
          px="6"
          py="2"
          fontSize="xl"
          fontWeight="bold"
          bg="bg.subtle"
        >
          {title}
        </Text>
      </Flex>
    </>
  );
};

export default SectionName;
