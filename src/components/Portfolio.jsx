import { useState } from "react";
import { Grid, GridItem, VStack, Image, Tabs } from "@chakra-ui/react";
import SectionName from "./SectionName";
import Eth from "../assets/eth.webp";
import Trx from "../assets/trx.webp";
import Sol from "../assets/sol.webp";

const Portfolio = () => {
  const [pic, setPic] = useState(Eth);

  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" gap="3">
        <GridItem colSpan={6} mb="30px">
          <SectionName title="Portfolio" />
        </GridItem>
        <GridItem colSpan={{ base: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <VStack>
            <Tabs.Root
              value={pic}
              onValueChange={(e) => setPic(e.value)}
              orientation="horizontal"
              variant="plain"
            >
              <Tabs.List bg="bg.muted" rounded="l3" p="1">
                <Tabs.Trigger value={Eth}>ETH</Tabs.Trigger>
                <Tabs.Trigger value={Trx}>TRX</Tabs.Trigger>
                <Tabs.Trigger value={Sol}>SOL</Tabs.Trigger>
                <Tabs.Indicator rounded="l2" />
              </Tabs.List>
            </Tabs.Root>
          </VStack>
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
