import React from "react";
import {
  Button,
  Box,
  Stack,
  Image,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import desklogo from "../public/desk-logo.svg";
import moblogo from "../public/mob-logo.svg";
import MenuStandar from "./MenuStandar";
import { Link } from "react-router-dom";

// COLOR BG #2D0B5A
const Header = () => {
  const logo = useBreakpointValue({ base: moblogo, lg: desklogo });
  const menuChange = useBreakpointValue({ base: true, lg: false });
  const navHead = useBreakpointValue({ base: "none", lg: "flex" });


  return (
    <Box
      p={4}
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack>
        <a href="https://app.pooltogether.com/deposit?network=polygon" target="_blank">
          <Image src={logo} h="50px" />
        </a>
      </Stack>

      <Stack>
        <Stack
          h={8}
          direction="row"
          display={navHead}
          bgColor="#5227A7"
          align="center"
          p={2}
          borderRadius={12}
        >
          <Link to="/">
            <Button
              display="flex"
              justifyContent="center"
              h={6}
              bgColor="#5227A7"
              _active={{ backgroundColor: "#341762", color: '#fff' }}
              _hover={{ backgroundColor: "#341762", color: '#fff' }}
              color="gray.300"
              borderRadius={12}
            >
              Depositar
            </Button>
          </Link>
          <Link to="/">
            <Button
              display="flex"
              justifyContent="center"
              h={6}
              bgColor="#5227A7"
              _active={{ backgroundColor: "#341762", color: '#fff' }}
              _hover={{ backgroundColor: "#341762", color: '#fff' }}
              color="gray.300"
              borderRadius={12}

            >
              Premios
            </Button>
          </Link>
          <Link to="/">
            <Button
              display="flex"
              justifyContent="center"
              h={6}
              bgColor="#5227A7"
              _active={{ backgroundColor: "#341762", color: '#fff' }}
              _hover={{ backgroundColor: "#341762", color: '#fff' }}
              color="gray.300"
              borderRadius={12}

            >
              Cuenta
            </Button>
          </Link>
          <Link to="/buy">
            <Button
              display="flex"
              justifyContent="center"
              h={6}
              bgColor="#5227A7"
              _active={{ backgroundColor: "#341762", color: '#fff' }}
              _hover={{ backgroundColor: "#341762", color: '#fff' }}
              color="gray.300"
              borderRadius={12}

            >
              Buy
            </Button>
          </Link>
        </Stack>
      </Stack>

        <Box display='flex' flexDirection="row" alignItems="center">
          <Button h={9} bgColor="#35F0D0" color="#2D0B5A" >
            Connect Wallet
          </Button>
          <MenuStandar />
        </Box>
      
    </Box>
  );
};

export default Header;
