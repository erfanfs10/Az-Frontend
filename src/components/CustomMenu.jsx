import { Box, IconButton, Menu, Portal, Link } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { links } from "../links";

const CustomMenu = ({ scrollToSection }) => {
  return (
    <>
      <Box hideFrom="lg">
        <Menu.Root>
          <Menu.Trigger asChild>
            <IconButton
              variant="outline"
              size={{
                base: "sm",
                sm: "sm",
                md: "md",
                lg: "md",
                xl: "md",
              }}
            >
              <IoMdArrowDropdown />
            </IconButton>
          </Menu.Trigger>
          <Portal>
            <Menu.Positioner>
              <Menu.Content>
                {links.map((link) => (
                  <Menu.Item key={link.title} value="new-txt">
                    <Link
                      variant="underline"
                      onClick={() => {
                        scrollToSection(link.section);
                      }}
                    >
                      {link.title}
                    </Link>
                  </Menu.Item>
                ))}
              </Menu.Content>
            </Menu.Positioner>
          </Portal>
        </Menu.Root>
      </Box>
    </>
  );
};

export default CustomMenu;
