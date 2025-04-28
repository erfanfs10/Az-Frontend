import React from "react";
import { VStack, Text, Button, Flex } from "@chakra-ui/react";
import SectionName from "./SectionName";

const WorkWithUs = () => {
  return (
    <>
      <Flex
        id="workWithUs"
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <SectionName title="Work With Us" />
        <VStack>
          <Text
            my="50px"
            fontSize={{
              base: "3xl",
              sm: "3xl",
              md: "4xl",
              lg: "4xl",
              xl: "5xl",
            }}
            fontWeight="bold"
          >
            Work With Us
          </Text>
          <Button
            size={{
              base: "sm",
              sm: "sm",
              md: "md",
              lg: "md",
              xl: "md",
            }}
          >
            Learn More
          </Button>
        </VStack>
      </Flex>
    </>
  );
};

export default WorkWithUs;
