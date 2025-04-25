import React from "react";
import { Text, Flex, Card, Image, Badge, VStack } from "@chakra-ui/react";
import SectionName from "./SectionName";
import mohammad from "../assets/mohammad.webp";
import mehdi from "../assets/mehdi.webp";
import sepehr from "../assets/sepehr.webp";
import erfan from "../assets/erfan.webp";

const WhoWeAre = () => {
  return (
    <>
      <Flex direction="column">
        <SectionName title="Who We Are" />
        <Flex
          mt="20px"
          direction="row"
          wrap="wrap"
          gap="4"
          justifyContent="space-between"
          alignItems="center"
        >
          <Card.Root width="320px">
            <Card.Body gap="2">
              <Card.Description>
                <Image
                  src={mohammad}
                  alt="Naruto vs Sasuke"
                  aspectRatio={3 / 4}
                  width="300px"
                />
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="center">
              <VStack>
                <Text fontWeight="bold" fontSize="lg">
                  Mohammad Foroutan
                </Text>
                <Badge colorPalette="green" size="md">
                  Product Owner
                </Badge>
              </VStack>
            </Card.Footer>
          </Card.Root>

          <Card.Root width="320px">
            <Card.Body gap="2">
              <Card.Description>
                <Image
                  src={mehdi}
                  alt="Naruto vs Sasuke"
                  aspectRatio={3 / 4}
                  width="300px"
                />
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="center">
              <VStack>
                <Text fontWeight="bold" fontSize="lg">
                  Mehdi Shiri
                </Text>
                <Badge colorPalette="green" size="md">
                  Scrum Master
                </Badge>
              </VStack>
            </Card.Footer>
          </Card.Root>

          <Card.Root width="320px">
            <Card.Body gap="2">
              <Card.Description>
                <Image
                  src={sepehr}
                  alt="Naruto vs Sasuke"
                  aspectRatio={3 / 4}
                  width="300px"
                />
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="center">
              <VStack>
                <Text fontWeight="bold" fontSize="lg">
                  Sepehr Eftekhari
                </Text>
                <Badge colorPalette="green" size="md">
                  UI / UX Designer
                </Badge>
              </VStack>
            </Card.Footer>
          </Card.Root>

          <Card.Root width="320px">
            <Card.Body gap="2">
              <Card.Description>
                <Image
                  src={erfan}
                  alt="Naruto vs Sasuke"
                  aspectRatio={3 / 4}
                  width="300px"
                />
              </Card.Description>
            </Card.Body>
            <Card.Footer justifyContent="center">
              <VStack>
                <Text fontWeight="bold" fontSize="lg">
                  Mahdi Farahmand
                </Text>
                <Badge colorPalette="green" size="md">
                  Developer
                </Badge>
              </VStack>
            </Card.Footer>
          </Card.Root>
        </Flex>
      </Flex>
    </>
  );
};

export default WhoWeAre;
