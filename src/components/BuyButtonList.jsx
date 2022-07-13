import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { FaChevronRight, FaStar, FaRegStar } from "react-icons/fa";
import useStore from "../global_state";

const BuyButtonList = () => {
  const mobToken = useBreakpointValue({ base: true, sm: false });

  const tokens = useStore((state) => state.tokens);
  const fetchTokens = useStore((state) => state.fetchTokens);

  const favTokens = useStore((state) => state.favTokens);
  const addToFav = useStore((state) => state.addToFav);

  const tokenToBuy = useStore((state) => state.tokenToBuy);
  const setTokenToBuy = useStore((state) => state.setTokenToBuy);

  // const tokenToReceive = useStore((state) => state.tokenToReceive);
  // const setTokenToReceive = useStore((state) => state.setTokenToReceive);

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  const handleAddFav = (el) => {
    // console.log(favTokens)
    // favTokens.unshift(x);
    // if (a.length > 7) {
    //     a.length = 7;
    // }
    console.log(el);
    console.log(favTokens)
    addToFav(el)
  }

  const handleSetToken = (token) => {
    console.log('token seteado: ', token);
    console.log('token anterior: ', tokenToBuy);
    setTokenToBuy(token);
  }


  return (
    <Box>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<FaChevronRight />}
          w={["70px", "100px"]}
          p={2}
          h={16}
          borderRadius={12}
          bgColor={tokenToBuy? "#35F0D0": "#ff7979"}
          color="#2D0B5A"
        >
          {tokenToBuy? tokenToBuy.symbol: 'TOKEN'}
        </MenuButton>
        <MenuList
          maxH="200px"
          overflowY="scroll"
          overflowX="hidden"
          bgColor="#35F0D0"
          color="#2D0B5A"
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
                  <Text onClick={()=> handleSetToken(el)} w='100%'>
                    {el.name} ({el.symbol})
                  </Text>

                  <Stack
                    fontSize={20}
                    onClick={()=>handleAddFav(el)}
                  >
                    <FaRegStar />
                  </Stack>
                </Stack>
              )}
            </MenuItem>
          )
          
          )}
        </MenuList>
      </Menu>
    </Box>
  );
};



export default BuyButtonList;
