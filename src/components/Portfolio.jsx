import React from "react";
import {
  Grid,
  GridItem,
  VStack,
  Button,
  Image,
} from "@chakra-ui/react";
import SectionName from "./SectionName";
import Pic from "../assets/react.svg";

const Portfolio = () => {
  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" gap="3">
        <GridItem colSpan={6} mb="30px">
          <SectionName title="Portfolio"/>
        </GridItem>
        <GridItem colSpan={3}>
          <VStack>
            <Button>Portfolio</Button>
            <Button>Portfolio</Button>
            <Button>Portfolio</Button>
            <Button>Portfolio</Button>
          </VStack>
        </GridItem>
        <GridItem colSpan={3}>
          <Image height="200px" src={Pic} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Portfolio;
