import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Banner from "./Banner";
import Portfolio from "./Portfolio";
import Services from "./Services";
import WorkWithUs from "./WorkWithUs";
import Comments from "./Comments";
import WhoWeAre from "./WhoWeAre";
import ContactUs from "./ContactUs";

const MainContent = () => {
  return (
    <SimpleGrid mt="30px" mx="20px" columns={1}>
      <Banner />
      <Portfolio />
      <Services />
      <WorkWithUs />
      <Comments />
      <WhoWeAre />
      <ContactUs />
    </SimpleGrid>
  );
};

export default MainContent;
