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
  Stack,
} from "@chakra-ui/react";
import SectionName from "./SectionName";
import pic from "../assets/sol.webp";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((e) => {
    console.log(e.name, e.email, e.subject, e.message);
    reset()
  });

  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)" gap="3">
        <GridItem colSpan={6} mb="30px">
          <SectionName title="Contact Us" />
        </GridItem>
        <GridItem colSpan={{ base: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <form onSubmit={onSubmit}>
            <Flex justifyContent="center" alignItems="center">
              <Fieldset.Root size="lg" maxW="md">
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

                <Button type="submit" alignSelf="flex-start">
                  Submit
                </Button>
              </Fieldset.Root>
            </Flex>
          </form>
        </GridItem>
        <GridItem colSpan={{ base: 6, sm: 6, md: 3, lg: 3, xl: 3 }}>
          <Flex justifyContent="center" alignItems="center">
            <Image height="400px" src={pic} />
          </Flex>
        </GridItem>
      </Grid>
    </>
  );
};

export default ContactUs;
