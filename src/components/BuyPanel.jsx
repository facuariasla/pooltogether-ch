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

  const tokenToSell = useStore((state) => state.tokenToSell);
  const setTokenToSell = useStore((state) => state.setTokenToSell);

  const tokenToReceive = useStore((state) => state.tokenToReceive);
  const setTokenToReceive = useStore((state) => state.setTokenToReceive);

  const addToFav = useStore((state) => state.addToFav);
  const favTokens = useStore((state) => state.favTokens);

  const standarTradePrice = useStore((state) => state.standarTradePrice);
  const setStandarTradePrice = useStore((state) => state.setStandarTradePrice);

  const [isFav, setIsFav] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [disabledInput, setDisabledInput] = useState(true);

  const [quantitySell, setQuantitySell] = useState(0);
  const [quantityBuy, setQuantityBuy] = useState(0);

  useEffect(() => {
    fetchETHPrice();
    fetchTokens();
  }, [fetchETHPrice, fetchTokens]);

  useEffect(() => {
    if (tokenToReceive && tokenToSell) {
      setStandarTradePrice();
      setDisabledInput(false);
      const newPrice = async () => {
        const newStandarP = await setStandarTradePrice();
        console.log('estandar price', newStandarP?.price)
        return setQuantityBuy(quantitySell * newStandarP?.price);
      }
      newPrice();
    
    } else {
      setDisabledInput(true);
    }
  }, [tokenToReceive, tokenToSell]);

  useEffect(() => {
    console.log(favTokens);
    console.log(tokenToReceive);
    if (favTokens.length !== 0 && tokenToReceive)
      if (favTokens.includes(tokenToReceive)) {
        setIsFav(true);
        setDisabledBtn(true);
      } else {
        setIsFav(false);
      }
  }, [tokenToReceive]);

  // 

  const favBuy = () => {
    if(!tokenToReceive)return
    // console.log("recibo", tokenToReceive);
    setIsFav(!isFav);
    addToFav(tokenToReceive);
    console.log(favTokens);
  };

  const setPrices = (sellQuantity) => {
    setQuantitySell(sellQuantity);
    console.log(sellQuantity);
    if (standarTradePrice) {
      setQuantityBuy(sellQuantity * standarTradePrice.price);
      console.log(standarTradePrice.price);
      console.log(sellQuantity * standarTradePrice.price);
      setDisabledBtn(false);
      if (sellQuantity * standarTradePrice.price === 0) {
        setDisabledBtn(true);
      }
    } else {
      console.log("no entro");
    }
  };

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
                  value={quantitySell}
                  onChange={(e) => setPrices(e.target.value)}
                  disabled={disabledInput ? true : false}
                />

                <Stack direction="row" align="center">
                  <select
                    type="text"
                    value={tokenToSell?.symbol}
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
                  <Stack color='gray.600' fontSize={18} cursor='not-allowed'>
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
                Receive
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
                  value={quantityBuy}
                  // onChange={(e) => setQuantityBuy(e.target.value)}
                  readOnly
                  disabled={true}
                />
                <Stack direction="row" align="center">
                  <select
                    type="text"
                    value={tokenToReceive?.symbol}
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
                    color={tokenToReceive? '#fff':'gray.600'}
                    cursor={tokenToReceive? 'pointer':'not-allowed'}
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
              disabled={disabledBtn ? true : false}
              fontWeight={500}
              h={10}
              borderRadius={12}
              bgColor="cian.100"
              color="purple.100"
            >
              Complete
            </Button>
          </Stack>
        </FormControl>

        {/* ACA VA UN CONDITIONAL BUTTON */}
      </form>
      {/* <p>pago: {quantitySell}</p>
      <p>recibo: {quantityBuy}</p> */}
      <p>You sell 1 {tokenToSell?.symbol} --- you get {standarTradePrice ? standarTradePrice.price : ""} {tokenToReceive?.symbol}</p>
    </Stack>
  );
};

export default BuyPanel;
