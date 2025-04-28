import React from "react";
import { VStack, Text, Button, Flex } from "@chakra-ui/react";

const Banner = () => {
  return (
    <>
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        id="brand"
      >
        <VStack gap="4" mt="50px">
          <Text
            fontSize={{
              base: "3xl",
              sm: "3xl",
              md: "4xl",
              lg: "4xl",
              xl: "5xl",
            }}
            fontWeight="bold"
          >
            We Are The Best
          </Text>
          <Text
            fontSize={{
              base: "lg",
              sm: "lg",
              md: "xl",
              lg: "xl",
              xl: "2xl",
            }}
          >
            We Are The Best
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

export default Banner;
