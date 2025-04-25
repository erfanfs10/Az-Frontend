import React from "react";
import { VStack, Text, Button } from "@chakra-ui/react";
import SectionName from "./SectionName";

const WorkWithUs = () => {
  return (
    <>
      <SectionName title="Work With Us" />
      <VStack>
        <Text my="50px" fontSize="5xl" fontWeight="bold">
            Work With Us
        </Text>
        <Button>Learn More</Button>
      </VStack>
    </>
  );
};

export default WorkWithUs;
