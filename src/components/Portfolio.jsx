import { useState } from "react";
import {
  Grid,
  GridItem,
  VStack,
  Image,
  Tabs,
  useBreakpointValue,
} from "@chakra-ui/react";
import SectionName from "./SectionName";
import p1 from "../assets/p1.webp";
import p2 from "../assets/p2.webp";
import p3 from "../assets/p3.webp";

const Portfolio = () => {
  const [pic, setPic] = useState(p1);
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
          <VStack>
            <Tabs.Root
              size={{ base: "sm", sm: "sm", md: "md", lg: "lg", xl: "lg" }}
              value={pic}
              onValueChange={(e) => setPic(e.value)}
              variant="plain"
              orientation={tabOrientation}
            >
              <Tabs.List bg="bg.muted" p="2" borderRadius="lg" shadow="md">
                <Tabs.Trigger borderRadius="lg" value={p1}>
                  Nebula Dark Theme
                </Tabs.Trigger>
                <Tabs.Trigger borderRadius="lg" value={p2}>
                  Astroship Pro
                </Tabs.Trigger>
                <Tabs.Trigger borderRadius="lg" value={p3}>
                  Mosaic Dashboard
                </Tabs.Trigger>
                <Tabs.Indicator borderRadius="lg" />
              </Tabs.List>
            </Tabs.Root>
          </VStack>
        </GridItem>
        <GridItem colSpan={{ base: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <VStack>
            <Image
              p="3"
              bg="bg.subtle"
              borderRadius="lg"
              shadow="md"
              src={pic}
            />
          </VStack>
        </GridItem>
      </Grid>
    </>
  );
};

export default Portfolio;
