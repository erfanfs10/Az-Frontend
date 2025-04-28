import React from "react";
import {
  Avatar,
  HStack,
  Text,
  Flex,
  Card,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import SectionName from "./SectionName";

const Comments = () => {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="3" id="comments">
        <GridItem colSpan={4} mb="30px">
          <SectionName title="Our Customers Opinions" />
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
              <Card.Title mt="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-start">
              <HStack gap="4">
                <Avatar.Root shape="rounded" size="lg">
                  <Avatar.Fallback />
                  <Avatar.Image src="https://i.pravatar.cc/300?u=iu" />
                </Avatar.Root>
                <Text fontWeight="bold" fontSize="lg">
                  Name
                </Text>
              </HStack>
            </Card.Footer>
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
              <Card.Title mt="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-start">
              <HStack gap="4">
                <Avatar.Root shape="rounded" size="lg">
                  <Avatar.Fallback />
                  <Avatar.Image src="https://i.pravatar.cc/300?u=iu" />
                </Avatar.Root>
                <Text fontWeight="bold" fontSize="lg">
                  Name
                </Text>
              </HStack>
            </Card.Footer>
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
              <Card.Title mt="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-start">
              <HStack gap="4">
                <Avatar.Root shape="rounded" size="lg">
                  <Avatar.Fallback />
                  <Avatar.Image src="https://i.pravatar.cc/300?u=iu" />
                </Avatar.Root>
                <Text fontWeight="bold" fontSize="lg">
                  Name
                </Text>
              </HStack>
            </Card.Footer>
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
              <Card.Title mt="2">Nue Camp</Card.Title>
              <Card.Description>
                This is the card body. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Curabitur nec odio vel dui euismod fermentum.
                Curabitur nec odio vel dui euismod fermentum.
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="flex-start">
              <HStack gap="4">
                <Avatar.Root shape="rounded" size="lg">
                  <Avatar.Fallback />
                  <Avatar.Image src="https://i.pravatar.cc/300?u=iu" />
                </Avatar.Root>
                <Text fontWeight="bold" fontSize="lg">
                  Name
                </Text>
              </HStack>
            </Card.Footer>
          </Card.Root>
        </GridItem>
      </Grid>
    </>
  );
};

export default Comments;
