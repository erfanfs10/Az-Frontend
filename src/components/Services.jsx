import { useState, useEffect } from "react";
import { Avatar, Card, Grid, GridItem } from "@chakra-ui/react";
import apiClient, { StaticURL } from "../api/client";
import { CanceledError } from "axios";
import SectionName from "./SectionName";

const Services = () => {
  const [services, setServices] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("services/", {
        signal: controller.signal,
      })
      .then((res) => {
        setServices(res.data.services);
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
          <SectionName title="Services" id="services"/>
        </GridItem>
        {services?.map((service) => (
          <GridItem
            key={service.id}
            colSpan={{ base: 4, sm: 4, md: 3, lg: 1, xl: 1 }}
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
                <Avatar.Root size="lg" shape="rounded">
                  <Avatar.Image src={StaticURL+service.image} />
                  <Avatar.Fallback name="Nue Camp" />
                </Avatar.Root>
                <Card.Title mt="2">{service.title}</Card.Title>
                <Card.Description>{service.description}</Card.Description>
              </Card.Body>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Services;
