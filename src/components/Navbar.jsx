import { Flex, HStack, Link } from "@chakra-ui/react";
import IconName from "./IconName";
import ChangeLang from "./ChangeLang";
import CustomMenu from "./CustomMenu";
import { links } from "../links";

const Navbar = ({ scrollToSection }) => {
  return (
    <>
      <Flex
        top="0"
        left="0"
        right="0"
        p="10px"
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        position="fixed"
        zIndex="overlay"
        w="full"
        bg={{ _light: "gray.100", _dark: "gray.800" }}
      >
        <IconName scrollToSection={scrollToSection} />
        <HStack gap="10" hideBelow="lg">
          {links.map((link) => (
            <Link
              key={link.title}
              variant="underline"
              onClick={() => {
                scrollToSection(link.section);
              }}
            >
              {link.title}
            </Link>
          ))}
        </HStack>
        <HStack gap="3">
          <ChangeLang />
          <CustomMenu scrollToSection={scrollToSection} />
        </HStack>
      </Flex>
    </>
  );
};

export default Navbar;
