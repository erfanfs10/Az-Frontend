import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Banner from "./Banner";
import Portfolio from "./Portfolio";
import Services from "./Services";

const MainContent = () => {
  return (
    <SimpleGrid columns={1}>
      <Banner />
      <Portfolio />
      <Services />
    </SimpleGrid>
  );
};

export default MainContent;
