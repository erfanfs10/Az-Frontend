import React from "react";
import { VStack, Text, Button, Flex } from "@chakra-ui/react";
import SectionName from "./SectionName";

const WorkWithUs = () => {
  return (
    <>
      <Flex id="workWithUs" justifyContent="center" alignItems="center" direction="column">
        <SectionName title="Work With Us" />
        <VStack>
          <Text my="50px" fontSize="5xl" fontWeight="bold">
            Work With Us
          </Text>
          <Button>Learn More</Button>
        </VStack>
      </Flex>
    </>
  );
};

export default WorkWithUs;
