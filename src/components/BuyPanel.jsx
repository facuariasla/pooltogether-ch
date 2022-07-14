import React, { useEffect } from "react";
import {
  Stack,
  Text,
  FormControl,
  Input,
  Button,
  FormLabel,
  Skeleton,
  Spinner,
} from "@chakra-ui/react";
import { FaChevronRight } from "react-icons/fa";

import useStore from "../global_state";
import BuyButtonList from "./BuyButtonList";
import ReceiveButtonList from "./ReceiveButtonList";

const BuyPanel = () => {
  const tokens = useStore((state) => state.tokens);
  const fetchTokens = useStore((state) => state.fetchTokens);

  const ETHprice = useStore((state) => state.ETHprice);
  const fetchETHPrice = useStore((state) => state.fetchETHPrice);

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  useEffect(() => {
    // 1000000000000000000 = 1
    // CHECK HOW TO APLY ARGUMENTS TO THIS FETCH 
    // 
    fetchETHPrice();
  }, [fetchETHPrice]);

  const handleClick = () => {
    console.log(tokens);
  };

  return (
    <Stack>
      <Stack align="center">
        <Text fontWeight={500} color='gray.300'>1 ETH = {ETHprice} USDT</Text>
      </Stack>

      <form autoComplete="off">
        <FormControl>
          <Stack spacing={8}>
            <Stack>
              <FormLabel htmlFor="quantity" m={0}>
                Cantidad
              </FormLabel>

              <Stack size="md" display="flex" direction="row" align="center">
                <Input
                  id="quantity"
                  type="number"
                  max={2}
                  h={16}
                  placeholder="0.000"
                  borderRadius={12}
                  color="#fff"
                  _placeholder={{ fontWeight: "400" }}
                  fontWeight={500}
                  bgColor="#493171"
                  border="none"
                  fontSize={20}
                />
                {/* <BuyButtonList/> */}
                {tokens ? (
                  <BuyButtonList />
                ) : (
                  <Skeleton
                    height={16}
                    borderRadius={12}
                    w={["70px", "100px"]}
                  />
                )}
              </Stack>
            </Stack>

            <Stack>
              <FormLabel htmlFor="quantity" m={0}>
                Recibir
              </FormLabel>

              <Stack size="md" display="flex" direction="row" align="center">
                <Input
                  id="quantity"
                  type="number"
                  required
                  maxLength={10}
                  h={16}
                  placeholder="0.000"
                  borderRadius={12}
                  color="#fff"
                  _placeholder={{ fontWeight: "400" }}
                  fontWeight={500}
                  bgColor="#493171"
                  border="none"
                  fontSize={20}

                />
                {/* <BuyButtonList /> */}
                {tokens ? (
                  <ReceiveButtonList />
                ) : (
                  <Skeleton
                    height={16}
                    borderRadius={12}
                    w={["70px", "100px"]}
                  />
                )}
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
