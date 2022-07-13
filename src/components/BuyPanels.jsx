import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Text,
  FormControl,
  Input,
  FormHelperText,
  FormLabel,
  InputRightElement,
  Button,
  InputGroup,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

// #35F0D0
// FaChevronRight

const BuyPanels = () => {
  const handleClick = () => {
    console.log("Se muestra la lista");
  };

  return (
    <Stack align="center">
      <Tabs w={["90%", null, "550px"]}>
        <TabList>
          <Tab
            _selected={{ color: "#2D0B5A", bg: "#35F0D0" }}
            borderTopRadius={12}
            w="50%"
            fontWeight={500}
          >
            Comprar
          </Tab>
          <Tab
            _selected={{ color: "#2D0B5A", bg: "#35F0D0" }}
            borderTopRadius={12}
            w="50%"
            fontWeight={500}
          >
            Vender
          </Tab>
        </TabList>

        {/* BUY PANEL */}
        <TabPanels>
          <TabPanel>
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
                          bgColor='#fff'
                          opacity='0.2'
                          _placeholder={{color:'#000000', fontWeight:'500'}}
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
                          bgColor='#fff'
                          opacity='0.2'
                          _placeholder={{color:'#000000', fontWeight:'500'}}
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
          </TabPanel>

          {/* SELL PANEL*/}
          <TabPanel>
            <p>VENDO!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default BuyPanels;
