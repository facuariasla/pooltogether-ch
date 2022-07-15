import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
  Text,
  useBreakpointValue,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { FaChevronRight, FaStar, FaRegStar } from "react-icons/fa";
import useStore from "../global_state";

const ReceiveButtonList = () => {
  const mobToken = useBreakpointValue({ base: true, sm: false });
  const toast = useToast()

  // Globalstate:
  const tokens = useStore((state) => state.tokens);
  const fetchTokens = useStore((state) => state.fetchTokens);

  const tokenToReceive = useStore((state) => state.tokenToReceive);
  const setTokenToReceive = useStore((state) => state.setTokenToReceive);

  const favTokens = useStore((state) => state.favTokens);
  const addToFav = useStore((state) => state.addToFav);

  const handleTokenToReceive = (token) => {
    console.log("recibiAS: ", tokenToReceive);
    console.log("recibes: ", token);
    setTokenToReceive(token);
  };

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  const handleAddFav = (el) => {
    // El handle de limite de 3 favs esta en el global_state
    console.log("token enviado:, ", el);
    console.log("favtokens: ", favTokens);
    if(addToFav(el)==='delete'){
      console.log('Agregar un toast')
      toast({
        title: 'Límite favoritos',
        description: "Ya tienes 3 favoritos",
        status: 'warning',
        duration: 4000,
        isClosable: true,
      })
    }
  };

  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<FaChevronRight />}
          w={["80px", "100px"]}
          p={2}
          h={16}
          borderRadius={12}
          bgColor={tokenToReceive ? "cian.100" : "#ff7979"}
          color="purple.100"
        >
          {tokenToReceive ? tokenToReceive.symbol : "TOKEN"}
        </MenuButton>
        <MenuList
          maxH="200px"
          overflowY="scroll"
          overflowX="hidden"
          bgColor="#35F0D0"
          color="#2D0B5A"
          border="none"
          css={{
            "&::-webkit-scrollbar": {
              width: "6px",
            },
            "&::-webkit-scrollbar-track": {
              background: "#333",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
              borderRadius: "10px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "#555",
            },
          }}
        >
          {tokens?.map((el) => (
            <MenuItem key={el.address} fontWeight="500">
              {mobToken ? (
                <Stack
                  direction="row"
                  align="center"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Text> ({el.symbol})</Text>
                  <FaRegStar />
                </Stack>
              ) : (
                <Stack
                  direction="row"
                  align="center"
                  justifyContent="space-between"
                  w="100%"
                >
                  <Text onClick={() => handleTokenToReceive(el)} w="100%">
                    {el.name} ({el.symbol})
                  </Text>
                  <Stack fontSize={20} onClick={() => handleAddFav(el)}>
                    <FaRegStar />
                  </Stack>
                </Stack>
              )}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default ReceiveButtonList;
