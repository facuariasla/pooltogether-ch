import {
  Box,
  Button,
  Divider,
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

  // TODOS los tokens (en ReceiveButton)

  // tokens de la wallet del  usuario
  const walletTokens = useStore((state) => state.walletTokens);
  const setTokenToPay = useStore((state) => state.setTokenToPay);


  const tokenToSell = useStore((state) => state.tokenToSell);
  const setTokenToSell = useStore((state) => state.setTokenToSell);


  // const tokenToReceive = useStore((state) => state.tokenToReceive);
  // const setTokenToReceive = useStore((state) => state.setTokenToReceive);

  const handleSetToken = (token) => {
    console.log('token de la wallet: ', token);
    console.log('token anterior de la wallet: ', tokenToSell);
    setTokenToSell(token);
  }


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
          bgColor={tokenToSell? "cian.100": "#ff7979"}
          color="purple.100"
        >
          {tokenToSell? tokenToSell.symbol: 'TOKEN'}
        </MenuButton>
        <MenuList
          maxH="200px"
          overflowY="scroll"
          overflowX="hidden"
          bgColor="purple.50"
          color="white"
          border='none'
          css={{
            '&::-webkit-scrollbar':{
              width: '6px'
            },
            '&::-webkit-scrollbar-track':{
              background: '#333',
              
            },
            '&::-webkit-scrollbar-thumb':{
              background: '#888',
              borderRadius: '10px'
            },
            '&::-webkit-scrollbar-thumb:hover':{
              background: '#555'
            },
          }}
        >
          {walletTokens?.map((el) => (
            <MenuItem key={el.id} fontWeight="500" _hover={{color: 'gray.800'}}>
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
