import { Box, Button, Menu, MenuButton, MenuList, MenuItem, Stack, Text, useBreakpointValue } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { FaChevronRight, FaStar, FaRegStar } from "react-icons/fa";
import useStore from "../global_state";

const ReceiveButtonList = () => {
  const mobToken = useBreakpointValue({ base: true, sm: false });

  const tokens = useStore((state) => state.tokens);
  // Ya se hizo el fetch en el BuyButton, es la misma lista
  const fetchTokens = useStore((state) => state.fetchTokens);

  const tokenToReceive = useStore((state) => state.tokenToReceive);
  const setTokenToReceive = useStore((state) => state.setTokenToReceive);

  const handleTokenToReceive = (token) => {
    console.log('recibiAS: ', tokenToReceive);
    console.log('recibes: ', token);

    setTokenToReceive(token)
  }

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

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
          bgColor={tokenToReceive? "#35F0D0": "#ff7979"}
          color="#2D0B5A"
        >
          {tokenToReceive? tokenToReceive.symbol: 'TOKEN'}
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
                  <Text onClick={()=> handleTokenToReceive(el)} w='100%'>
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
}

export default ReceiveButtonList