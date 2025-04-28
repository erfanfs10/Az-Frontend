import React from "react";
import {
  Text,
  Card,
  Image,
  Badge,
  VStack,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import SectionName from "./SectionName";
import mohammad from "../assets/mohammadNew.webp";
import mehdi from "../assets/mehdiNew.webp";
import sepehr from "../assets/sepehrNew.webp";
import erfan from "../assets/erfanNew.webp";

const WhoWeAre = () => {
  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="3" id="ourTeam">
        <GridItem colSpan={4} mb="30px">
          <SectionName title="Who We Are" />
        </GridItem>

        <GridItem colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1 }}>
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
                  borderRadius="lg"
                  src={mohammad}
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
                  Mohammad Foroutan
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
                  Product Owner
                </Badge>
              </VStack>
            </Card.Footer>
          </Card.Root>
        </GridItem>

        <GridItem colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1 }}>
          <Card.Root borderRadius="lg" shadow="md">
            <Card.Body gap="2">
              <Card.Description>
                <Image borderRadius="lg" src={mehdi} alt="Naruto vs Sasuke" />
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
        </GridItem>

        <GridItem colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1 }}>
          <Card.Root borderRadius="lg" shadow="md">
            <Card.Body gap="2">
              <Card.Description>
                <Image borderRadius="lg" src={sepehr} alt="Naruto vs Sasuke" />
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
        </GridItem>

        <GridItem colSpan={{ base: 2, sm: 2, md: 2, lg: 1, xl: 1 }}>
          <Card.Root borderRadius="lg" shadow="md">
            <Card.Body gap="2">
              <Card.Description>
                <Image borderRadius="lg" src={erfan} alt="Naruto vs Sasuke" />
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
        </GridItem>
      </Grid>

      {/* <Flex direction="column" id="ourTeam">
        <SectionName title="Who We Are" />
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
              <Card.Description>
                <Image
                  borderRadius="lg"
                  src={mohammad}
                  alt="Naruto vs Sasuke"
                  aspectRatio={6 / 7}
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

          <Card.Root width="300px" borderRadius="lg" shadow="md">
            <Card.Body gap="2">
              <Card.Description>
                <Image
                  borderRadius="lg"
                  src={mehdi}
                  alt="Naruto vs Sasuke"
                  aspectRatio={6 / 7}
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

          <Card.Root width="300px" borderRadius="lg" shadow="md">
            <Card.Body gap="2">
              <Card.Description>
                <Image
                  borderRadius="lg"
                  src={sepehr}
                  alt="Naruto vs Sasuke"
                  aspectRatio={6 / 7}
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

          <Card.Root width="300px" borderRadius="lg" shadow="md">
            <Card.Body gap="2">
              <Card.Description>
                <Image
                  borderRadius="lg"
                  src={erfan}
                  alt="Naruto vs Sasuke"
                  aspectRatio={6 / 7}
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
      </Flex> */}
    </>
  );
};

export default WhoWeAre;
