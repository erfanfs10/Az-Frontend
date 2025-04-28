import React from "react";
import { Avatar, HStack, Text, Flex, Card } from "@chakra-ui/react";
import SectionName from "./SectionName";

const Comments = () => {
  return (
    <>
      <Flex direction="column" id="comments">
        <SectionName title="Our Customers Opinions" />
        <Flex
          mt="20px"
          direction="row"
          wrap="wrap"
          gap="2"
          justifyContent="space-around"
          alignItems="center"
        >
          <Card.Root width="300px" borderRadius="lg" shadow="md">
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

          <Card.Root width="300px" borderRadius="lg" shadow="md">
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

          <Card.Root width="300px" borderRadius="lg" shadow="md">
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

          <Card.Root width="300px" borderRadius="lg" shadow="md">
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
        </Flex>
      </Flex>
    </>
  );
};

export default Comments;
