import React from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Image,
  Textarea,
  Grid,
  GridItem,
  Field,
  Fieldset,
  Button,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import { toaster } from "./ui/toaster";
import apiClient from "../api/client";
import SectionName from "./SectionName";
import map from "../assets/map.webp";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((e) => {
    apiClient
      .post(`contact/`, e)
      .then((res) => {
        toaster.create({
          title: `Thank You For Your Contact`,
          type: "success",
        });
        reset();
      })
      .catch((err) => {
        toaster.create({
          title: `Something Went Wrong Please Try Again`,
          type: "error",
        });
      });
  });

  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" gap="3">
        <GridItem colSpan={6}>
          <SectionName title="Contact Us" id="contact" />
        </GridItem>
        <GridItem colSpan={{ base: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <form onSubmit={onSubmit}>
            <Flex justifyContent="center" alignItems="center">
              <Fieldset.Root
                bg="bg.subtle"
                size={{ base: "sm", sm: "sm", md: "md", lg: "lg", xl: "lg" }}
                maxW="md"
                p="10"
                borderRadius="lg"
                shadow="md"
              >
                <Stack>
                  <Fieldset.Legend>Contact details</Fieldset.Legend>
                  <Fieldset.HelperText>
                    Please provide your contact details below.
                  </Fieldset.HelperText>
                </Stack>

                <Fieldset.Content>
                  <Field.Root>
                    <Field.Label>Name</Field.Label>
                    <Input {...register("name")} />
                    <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Email address</Field.Label>
                    <Input {...register("email")} type="email" />
                    <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Subject</Field.Label>
                    <Input {...register("subject")} />
                    <Field.ErrorText>{errors.subject?.message}</Field.ErrorText>
                  </Field.Root>

                  <Field.Root>
                    <Field.Label>Message</Field.Label>
                    <Textarea {...register("message")} />
                    <Field.ErrorText>{errors.message?.message}</Field.ErrorText>
                  </Field.Root>
                </Fieldset.Content>

                <Button
                  type="submit"
                  alignSelf="flex-start"
                  size={{
                    base: "sm",
                    sm: "sm",
                    md: "md",
                    lg: "md",
                    xl: "md",
                  }}
                >
                  Submit
                </Button>
              </Fieldset.Root>
            </Flex>
          </form>
        </GridItem>
        <GridItem colSpan={{ base: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <Flex justifyContent="center" alignItems="center">
            <Link
              p="5"
              bg="bg.subtle"
              borderRadius="lg"
              shadow="md"
              href="https://maps.app.goo.gl/7izzFub1TxLcQjgb9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image height="400px" src={map} />
            </Link>
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default ContactUs;
