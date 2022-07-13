import React from 'react'
import {  Stack, Text, FormControl, Input, InputGroup, Button, FormLabel, InputRightElement} from '@chakra-ui/react'
import { FaChevronRight } from "react-icons/fa";

const BuyPanel = () => {

  const handleClick = () => {
    console.log("Se muestra la lista");
  };

  return (
    <Stack>
    <Stack align="center">
      <Text>BT PRICE $$$</Text>
    </Stack>

    <form autoComplete="off">
      <FormControl>
        <Stack spacing={8}>



          <Stack>
            <FormLabel htmlFor="quantity" m={0}>
              Cantidad
            </FormLabel>
            
            <InputGroup size="md" display="flex">
              <Input
                id="quantity"
                type="text"
                h={16}
                placeholder="CONTIONAL CURRENCY"
                borderRadius={12}
                color='#fff'
                _placeholder={{fontWeight:'400'}}
                fontWeight={500}
              />
              <InputRightElement width={['5.5rem', "8rem"]} h="100%">
                <Button
                  h="50%"
                  w='80%'
                  size="sm"
                  onClick={handleClick}
                  rightIcon={<FaChevronRight />}
                  color='#2D0B5A'
                  bgColor='#35F0D0'
                  borderRadius={12}
                >
                  USDC
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>




          <Stack>
            <FormLabel htmlFor="quantity" m={0}>
              Recibir
            </FormLabel>

            <InputGroup size="md" display="flex">
              <Input
                id="quantity"
                type="text"
                h={16}
                placeholder="CONTIONAL CURRENCY"
                borderRadius={12}
                color='#fff'
                _placeholder={{fontWeight:'400'}}
                fontWeight={500}
              />
              <InputRightElement width={['5.5rem', "8rem"]} h="100%">
                <Button
                  h="50%"
                  w='80%'
                  size="sm"
                  onClick={handleClick}
                  rightIcon={<FaChevronRight />}
                  color='#2D0B5A'
                  bgColor='#35F0D0'
                  borderRadius={12}
                >
                  BTC
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </Stack>
      </FormControl>

      {/* ACA VA UN CONDITIONAL BUTTON */}
    </form>
  </Stack>
  )
}

export default BuyPanel