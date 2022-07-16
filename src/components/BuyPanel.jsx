import React, { useEffect, useState } from "react";
import {
  Stack,
  Text,
  FormControl,
  Input,
  Button,
  FormLabel,
  Skeleton,
} from "@chakra-ui/react";
import { FaChevronRight, FaStar, FaRegStar } from "react-icons/fa";

import useStore from "../global_state";
import BuyButtonList from "./BuyButtonList";
import ReceiveButtonList from "./ReceiveButtonList";

const BuyPanel = () => {
  const walletTokens = useStore((state) => state.walletTokens);

  const tokens = useStore((state) => state.tokens);
  const fetchTokens = useStore((state) => state.fetchTokens);

  const ETHprice = useStore((state) => state.ETHprice);
  const fetchETHPrice = useStore((state) => state.fetchETHPrice);

  const [quantitySell, setQuantitySell] = useState();
  const [quantityBuy, setQuantityBuy] = useState();

  const tokenToSell = useStore((state) => state.tokenToSell);
  const setTokenToSell = useStore((state) => state.setTokenToSell);

  const tokenToReceive = useStore((state) => state.tokenToReceive);
  const setTokenToReceive = useStore((state) => state.setTokenToReceive);

  const addToFav = useStore((state) => state.addToFav);
  const favTokens = useStore((state) => state.favTokens);

  const standarTradePrice = useStore((state) => state.standarTradePrice);
  const setStandarTradePrice = useStore((state) => state.setStandarTradePrice);

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    fetchTokens();
  }, [fetchTokens]);

  useEffect(() => {
    fetchETHPrice();
  }, [fetchETHPrice]);

  useEffect(() => {
    if (tokenToReceive && tokenToSell) {
      setStandarTradePrice();
    }
  }, [tokenToReceive, tokenToSell]);

  const favSell = () => {
    // Fav sell???
    console.log("vendo", tokenToSell);
    if (tokenToSell) addToFav(tokenToSell);
  };

  const favBuy = () => {
    // console.log("recibo", tokenToReceive);
    setIsFav(!isFav);
    addToFav(tokenToReceive);
    console.log(favTokens);
  };

  useEffect(() => {
    console.log(favTokens);
    console.log(tokenToReceive);
    if (favTokens.length !== 0 && tokenToReceive)
      if (favTokens.includes(tokenToReceive)) {
        setIsFav(true);
      } else {
        setIsFav(false);
      }
  }, [tokenToReceive]);

  return (
    <Stack pb={10}>
      <Stack align="center">
        <Text fontWeight={500} color="gray.300">
          1 ETH = {ETHprice} USDT
        </Text>
      </Stack>

      <form autoComplete="off">
        <FormControl>
          <Stack spacing={8}>
            <Stack>
              <FormLabel htmlFor="inputSell" m={0}>
                Quantity
              </FormLabel>

              <Stack size="md" display="flex" direction="row" align="center">
                <Input
                  id="inputSell"
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
                  value={quantitySell || ""}
                  onChange={(e) => setQuantitySell(e.target.value)}
                />
             
                <Stack direction="row" align="center">
                  <select
                    type="text"
                    onChange={(e) => setTokenToSell(e.target.value)}
                    style={{
                      height: "60px",
                      borderRadius: "10px",
                      backgroundColor: "#35F0D0",
                      color: "#000",
                      fontWeight: "500",
                      border: "none",
                      textAlign: "center",
                      width: "81px",
                    }}
                  >
                    <option
                      style={{
                        backgroundColor: "#5227A7",
                        fontWeight: "500",
                        color: "#fff",
                        borderRadius: "12px",
                        border: "none",
                      }}
                    >
                      -
                    </option>
                    {walletTokens?.map((el) => (
                      <option
                        key={el.id}
                        style={{
                          backgroundColor: "#5227A7",
                          fontWeight: "500",
                          color: "#fff",
                          borderRadius: "12px",
                          border: "none",
                        }}
                      >
                        {el.symbol}
                      </option>
                    ))}
                  </select>
                  <Stack opacity="0.3" fontSize={18}>
                    <FaRegStar />
                  </Stack>
                </Stack>
                {/* {tokens ? (
                  <BuyButtonList />
                ) : (
                  <Skeleton
                    height={16}
                    borderRadius={12}
                    w={["70px", "100px"]}
                  />
                )} */}
              </Stack>
            </Stack>

            <Stack>
              <FormLabel htmlFor="inputBuy" m={0}>
                Recibir
              </FormLabel>

              <Stack size="md" display="flex" direction="row" align="center">
                <Input
                  id="inputBuy"
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
                  value={quantityBuy || ""}
                  onChange={(e) => setQuantityBuy(e.target.value)}
                />
                <Stack direction="row" align="center">
                  <select
                    type="text"
                    onChange={(e) => setTokenToReceive(e.target.value)}
                    style={{
                      height: "60px",
                      borderRadius: "10px",
                      backgroundColor: "#35F0D0",
                      color: "#000",
                      fontWeight: "500",
                      border: "none",
                      textAlign: "center",
                      width: "81px",
                    }}
                  >
                    <option
                      style={{
                        backgroundColor: "#5227A7",
                        fontWeight: "500",
                        color: "#fff",
                        borderRadius: "12px",
                        border: "none",
                      }}
                    >
                      -
                    </option>
                    {tokens?.map((el) => (
                      <option
                        key={el.symbol}
                        style={{
                          backgroundColor: "#5227A7",
                          fontWeight: "500",
                          color: "#fff",
                          borderRadius: "12px",
                          border: "none",
                        }}
                      >
                        {el.symbol}
                      </option>
                    ))}
                  </select>
                  <Stack
                    fontSize={18}
                    color="white"
                    cursor="pointer"
                    onClick={() => favBuy()}
                  >
                    {/* <FaRegStar /> */}
                    {isFav ? <FaStar /> : <FaRegStar />}
                  </Stack>
                </Stack>
                {/* {tokens ? (
                  <ReceiveButtonList />
                ) : (
                  <Skeleton
                    height={16}
                    borderRadius={12}
                    w={["70px", "100px"]}
                  />
                )} */}
              </Stack>
            </Stack>

            <Button
              // _disabled={(isFav&&goodAverage)?'':''}
              // disabled={false}
              disabled={isFav ? true : false}
              fontWeight={500}
              h={10}
              borderRadius={12}
              bgColor="cian.100"
              color="purple.100"
            >
              {isFav ? "Wait average..." : "Complete"}
            </Button>
          </Stack>
        </FormControl>

        {/* ACA VA UN CONDITIONAL BUTTON */}
      </form>
      {/* <p>pago: {quantitySell}</p>
      <p>recibo: {quantityBuy}</p> */}
      <p>You sell 1 {tokenToSell?.symbol}</p>
      <p>
        You get: {standarTradePrice ? standarTradePrice.price : ""}{" "}
        {tokenToReceive?.symbol}
      </p>
    </Stack>
  );
};

export default BuyPanel;
