import React from "react";
import { VStack, Text, Button, Flex, Grid, GridItem } from "@chakra-ui/react";
import SectionName from "./SectionName";

const WorkWithUs = () => {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="3">
        <GridItem colSpan={4}>
          <SectionName title="Work With Us" id="workWithUs" />
        </GridItem>
      </Grid>
      <GridItem>
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
      </GridItem>
    </>
  );
};

export default WorkWithUs;
