import React from "react";
import { Link } from "react-router-dom";
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
        display="flex"
      >
        <CgMenuLeft />
      </MenuButton>
      <MenuList bgColor="#5227A7" color="#fff" border="none">
        <MenuItem _hover={{ color: "black", backgroundColor: "#fff" }}>
          <Link to="/">Home</Link>
        </MenuItem>
        <MenuItem _hover={{ color: "black", backgroundColor: "#fff" }}>
          <Link to="/buy">Buy/Sell</Link>
        </MenuItem>{" "}
        <MenuItem _hover={{ color: "black", backgroundColor: "#fff" }}>
          Lorem2
        </MenuItem>
        <MenuItem _hover={{ color: "black", backgroundColor: "#fff" }}>
          Lorem3
        </MenuItem>
        <MenuItem _hover={{ color: "black", backgroundColor: "#fff" }}>
          Lorem4
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuStandar;
