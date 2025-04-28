import { useState, useEffect } from "react";
import {
  Avatar,
  HStack,
  Text,
  Card,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import apiClient, { StaticURL } from "../api/client";
import { CanceledError } from "axios";
import SectionName from "./SectionName";

const Comments = () => {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get("comments/", {
        signal: controller.signal,
      })
      .then((res) => {
        setComments(res.data.comments);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
      });
    return () => controller.abort();
  }, []);

  return (
    <>
      <Grid templateColumns="repeat(4, 1fr)" gap="3" id="comments">
        <GridItem colSpan={4} mb="30px">
          <SectionName title="Our Customers Opinions" />
        </GridItem>

        {comments?.map((comment) => (
          <GridItem
            key={comment.id}
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
              borderRadius="lg"
              shadow="md"
            >
              <Card.Body gap="2">
                <Card.Title mt="2">{comment.title}</Card.Title>
                <Card.Description>{comment.description}</Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-start">
                <HStack gap="4">
                  <Avatar.Root shape="rounded" size="lg">
                    <Avatar.Fallback />
                    <Avatar.Image src={StaticURL+comment.avatar}/>
                  </Avatar.Root>
                  <Text fontWeight="bold" fontSize="lg">
                    {comment.name}
                  </Text>
                </HStack>
              </Card.Footer>
            </Card.Root>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};

export default Comments;
