import React from "react";
import { Avatar, Card, Flex } from "@chakra-ui/react";
import SectionName from "./SectionName";

const Services = () => {
  return (
    <>
      <Flex direction="column" id="services">
        <SectionName title="Services" />
        <Flex
          mt="20px"
          direction="row"
          wrap="wrap"
          gap="2"
          justifyContent="space-around"
          alignItems="center"
        >
          <Card.Root width="400px" borderRadius="lg" shadow="md">
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

          <Card.Root width="400px" borderRadius="lg" shadow="md">
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

          <Card.Root width="400px" borderRadius="lg" shadow="md">
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
        </Flex>
      </Flex>
    </>
  );
};

export default Services;
