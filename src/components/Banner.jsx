import React from "react";
import { VStack, Text, Button } from "@chakra-ui/react";

const Banner = () => {
  return (
    <>
      <VStack gap="4" mt="50px">
        <Text fontSize="5xl" fontWeight="bold">
          We Are The Best
        </Text>
        <Text fontSize="2xl">We Are The Best</Text>
        <Button>Learn More</Button>
      </VStack>
    </>
  );
};

export default Banner;
