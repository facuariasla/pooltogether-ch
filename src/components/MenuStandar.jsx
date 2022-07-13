import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import { CgMenuLeft } from "react-icons/cg";

// CgMenuLeft
const MenuStandar = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        h={8}
        color="#35F0D0"
        bgColor="#2D0B5A"
        _hover={{ bgColor: "#2D0B5A", color: "#fff" }}
        _active={{ bgColor: "#2D0B5A", color: "#fff" }}
        fontSize={30}
        display='flex'
      >
        <CgMenuLeft />
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuStandar;
