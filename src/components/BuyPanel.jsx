import React, { useEffect } from "react";
import {
  Stack,
  Text,
  FormControl,
  Input,
  InputGroup,
  Button,
  FormLabel,
  InputRightElement,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

import useStore from "../global_state";
import BuyButtonList from "./BuyButtonList";

const BuyPanel = () => {
  const tokens = useStore((state) => state.tokens);
  const fetchTokens = useStore((state) => state.fetchTokens);

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  const handleClick = () => {
    console.log(tokens);
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

              <Stack size="md" display="flex" direction='row' align='center'>
                <Input
                  id="quantity"
                  type="text"
                  h={16}
                  placeholder="CONTIONAL CURRENCY"
                  borderRadius={12}
                  color="#fff"
                  _placeholder={{ fontWeight: "400" }}
                  fontWeight={500}
                  bgColor='#493171'
                  border='none'
                />
                  <BuyButtonList/>

              </Stack>
            </Stack>

            <Stack>
              <FormLabel htmlFor="quantity" m={0}>
                Recibir
              </FormLabel>

              <Stack size="md" display="flex" direction='row' align='center'>
                <Input
                  id="quantity"
                  type="text"
                  h={16}
                  placeholder="CONTIONAL CURRENCY"
                  borderRadius={12}
                  color="#fff"
                  _placeholder={{ fontWeight: "400" }}
                  fontWeight={500}
                  bgColor='#493171'
                  border='none'
                />
                  <BuyButtonList/>
              </Stack>
            </Stack>
          </Stack>
        </FormControl>

        {/* ACA VA UN CONDITIONAL BUTTON */}
      </form>


    </Stack>
  );
};



export default BuyPanel;
