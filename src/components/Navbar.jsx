import React from "react";
import { Flex, HStack, Link } from "@chakra-ui/react";
import IconName from "./IconName";
import ChangeLang from "./ChangeLang";

const Navbar = () => {
  return (
    <>
      <Flex direction="row" alignItems="center" justifyContent="space-between">
        <IconName />
        <HStack gap="10">
          <Link variant="underline">
            About us
          </Link>
          <Link variant="underline">
            Projects
          </Link>
          <Link variant="underline">
            Our Team
          </Link>
        </HStack>
        <ChangeLang />
      </Flex>
    </>
  );
};

export default Navbar;
