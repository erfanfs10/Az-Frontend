import React from "react";
import { Avatar, Card, Grid, GridItem } from "@chakra-ui/react";
import SectionName from "./SectionName";

const Services = () => {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="3" id="services">
        <GridItem colSpan={4} mb="30px">
          <SectionName title="Services" />
        </GridItem>
        <GridItem colSpan={{ base: 4, sm: 4, md: 3, lg: 1, xl: 1 }}>
          <Card.Root
            size={{
              base: "sm",
              sm: "sm",
              md: "md",
              lg: "lg",
              xl: "lg",
            }}
            borderRadius="lg"
            shadow="md"
          >
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://picsum.photos/200/300" />
                <Avatar.Fallback name="Nue Camp" />
              </Avatar.Root>
              <Card.Title mt="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={{ base: 4, sm: 4, md: 3, lg: 1, xl: 1 }}>
          <Card.Root
            size={{
              base: "sm",
              sm: "sm",
              md: "md",
              lg: "lg",
              xl: "lg",
            }}
            borderRadius="lg"
            shadow="md"
          >
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://picsum.photos/200/300" />
                <Avatar.Fallback name="Nue Camp" />
              </Avatar.Root>
              <Card.Title mt="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={{ base: 4, sm: 4, md: 3, lg: 1, xl: 1 }}>
          <Card.Root
            size={{
              base: "sm",
              sm: "sm",
              md: "md",
              lg: "lg",
              xl: "lg",
            }}
            borderRadius="lg"
            shadow="md"
          >
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://picsum.photos/200/300" />
                <Avatar.Fallback name="Nue Camp" />
              </Avatar.Root>
              <Card.Title mt="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </GridItem>
        <GridItem colSpan={{ base: 4, sm: 4, md: 3, lg: 1, xl: 1 }}>
          <Card.Root
            size={{
              base: "sm",
              sm: "sm",
              md: "md",
              lg: "lg",
              xl: "lg",
            }}
            borderRadius="lg"
            shadow="md"
          >
            <Card.Body gap="2">
              <Avatar.Root size="lg" shape="rounded">
                <Avatar.Image src="https://picsum.photos/200/300" />
                <Avatar.Fallback name="Nue Camp" />
              </Avatar.Root>
              <Card.Title mt="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
              </Card.Description>
            </Card.Body>
          </Card.Root>
        </GridItem>
      </Grid>
    </>
  );
};

export default Services;
