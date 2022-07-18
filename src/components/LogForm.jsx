import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
  FormLabel,
  Input,
  FormControl,
} from "@chakra-ui/react";

const LogForm = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleNumCard = (e) => {
    e.preventDefault();
    //remove all the empty spaces in the input
    const inputVal = e.target.value.replace(/ /g, "");
    // Get only digits
    let inputNumbersOnly = inputVal.replace(/\D/g, "");

    if (inputNumbersOnly.length > 16) {
      //If entered value has a length greater than 16 then take only the first 16 digits
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }
    // get nd array of 4 digifs per an element EX: ['4242, '4242', ...]
    const splits = inputNumbersOnly.match(/.{1,4}/g);
    let spacedNumber = "";
    if (splits) {
      // join all the splits with an empty space
      spacedNumber = splits.join(" ");
    }
    setCardNumber(spacedNumber);
  };

  return (
    <Box display="flex" justifyContent="center" minH="100vh">
      <Box width="100%" h="100%" maxW="1280px">
        {/* FORM CONTAINER */}
        <Stack>
          <Stack>
            <Heading>Payment Details</Heading>
            <Text>
              Complete your purchase by providing your payment details
            </Text>
          </Stack>

          <Stack>
            <form autoComplete="off">
              <FormControl isRequired>
                <Stack spacing={4}>
                  <Stack>
                    <FormLabel m={0} p={0}>
                      Email address
                    </FormLabel>
                    <Input type="email" required />
                  </Stack>

                  <Stack>
                    <FormLabel m={0} p={0}>
                      Card details
                    </FormLabel>
                    <Input
                      type="number"
                      min="16"
                      // max="16"
                      required
                      value={cardNumber}
                      onChange={(e) => handleNumCard(e)}
                    />
                  </Stack>

                  <Stack>
                    <FormLabel m={0} p={0}>
                      Cardholder name
                    </FormLabel>
                    <Input type="text" required />
                  </Stack>

                  <Stack direction="row" w="100%">
                    <Stack w="100%">
                      <FormLabel m={0} p={0}>
                        Month/Year
                      </FormLabel>
                      <Input type="number" placeholder="mm/yy" />
                    </Stack>
                    <Stack w="100%">
                      <FormLabel m={0} p={0}>
                        CVV
                      </FormLabel>
                      <Input type="number" min="3" max="4" required />
                    </Stack>
                  </Stack>
                </Stack>
              </FormControl>
            </form>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default LogForm;
