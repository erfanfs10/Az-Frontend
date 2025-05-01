import { useState, useEffect } from "react";
import {
  Text,
  Card,
  Image,
  Badge,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import apiClient, { StaticURL } from "../api/client";
import { CanceledError } from "axios";
import SectionName from "./SectionName";

const WhoWeAre = ({id}) => {
  const [team, setTeam] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("team/", {
        signal: controller.signal,
      })
      .then((res) => {
        setTeam(res.data.team);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="3">
        <GridItem colSpan={4}>
          <SectionName title="Who We Are" id="ourTeam"/>
        </GridItem>

        {team?.map((t) => (
          <GridItem
            key={t.id}
            colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1 }}
          >
            <Card.Root
              size={{
                base: "sm",
                sm: "sm",
                md: "md",
                lg: "lg",
                xl: "lg",
              }}
              shadow="md"
            >
              <Card.Body gap="2">
                <Card.Description>
                  <Image
                    src={StaticURL+t.avatar}
                    borderRadius="lg"
                    alt="Naruto vs Sasuke"
                  />
                </Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="center">
                <VStack>
                  <Text
                    fontWeight="bold"
                    fontSize={{
                      base: "sm",
                      sm: "sm",
                      md: "md",
                      lg: "lg",
                      xl: "lg",
                    }}
                  >
                    {t.name}
                  </Text>
                  <Badge
                    colorPalette="green"
                    size={{
                      base: "sm",
                      sm: "sm",
                      md: "md",
                      lg: "lg",
                      xl: "lg",
                    }}
                  >
                    {t.role}
                  </Badge>
                </VStack>
              </Card.Footer>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default WhoWeAre;
