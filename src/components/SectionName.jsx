import React from "react";
import { Text, Flex, Separator } from "@chakra-ui/react";

const SectionName = ({ title, id }) => {
  return (
    <>
      <Separator size="md" my="20px" borderColor="gray.400/30" id={id}/>
      <Flex justifyContent="center">
        <Text
        mb="20px"
          borderRadius="lg"
          shadow="md"
          width="fit-content"
          px="6"
          py="2"
          fontSize={{
            base: "lg",
            sm: "lg",
            md: "lg",
            lg: "lg",
            xl: "xl",
          }}
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
