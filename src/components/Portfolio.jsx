import { useState } from "react";
import {
  Grid,
  GridItem,
  VStack,
  Image,
  Tabs,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import SectionName from "./SectionName";
import Eth from "../assets/eth.webp";
import Trx from "../assets/trx.webp";
import Sol from "../assets/sol.webp";

const Portfolio = () => {
  const [pic, setPic] = useState(Eth);
  const tabOrientation = useBreakpointValue({
    base: "horizontal",
    md: "vertical",
  });

  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" gap="3" id="portfolio">
        <GridItem colSpan={6} mb="30px">
          <SectionName title="Portfolio" />
        </GridItem>
        <GridItem colSpan={{ base: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <Flex justifyContent="center" alignItems="center">
            <Tabs.Root
              size={{ base: "sm", sm: "sm", md: "md", lg: "lg", xl: "lg" }}
              value={pic}
              onValueChange={(e) => setPic(e.value)}
              variant="plain"
              orientation={tabOrientation}
            >
              <Tabs.List bg="bg.muted" p="2" borderRadius="lg" shadow="md">
                <Tabs.Trigger borderRadius="lg" value={Eth}>
                  ETH
                </Tabs.Trigger>
                <Tabs.Trigger borderRadius="lg" value={Trx}>
                  TRX
                </Tabs.Trigger>
                <Tabs.Trigger borderRadius="lg" value={Sol}>
                  SOL
                </Tabs.Trigger>
                <Tabs.Indicator borderRadius="lg" />
              </Tabs.List>
            </Tabs.Root>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <VStack>
            <Image height="200px" src={pic} />
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default Portfolio;
