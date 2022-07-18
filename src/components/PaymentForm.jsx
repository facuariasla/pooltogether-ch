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
import { useForm } from "react-hook-form";
import { CardCVV, cardNumberLengthValid } from "../validations";

const PaymentForm = () => {
  const [validForm, setValidForm] = useState(false);

  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm({
    defaultValues: {
      nombre: "Luis",
      email: "luis@hotmail.com",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    setValidForm(true);
    if(data.usd_amount){
      // Validacion en el backend...
      console.log('se pagaron: ', data.usd_amount)
    }
  };

  const currentDate = () => {
    let actualMonth = new Date().getMonth() + 1;
    let actualYear = new Date().getFullYear();
    if (actualMonth.toString().length === 1) {
      return `${actualYear}-0${actualMonth}`;
    } else {
      return `${actualYear}-${actualMonth}`;
    }
  };


  return (
    <Box display="flex" justifyContent="center" pb={['100px', null, '50px']}>
      <Box width="100%" h="100%" maxW="1280px" align='center'>
        <Stack maxW='500px' px={4}>
          <Stack>
            <Heading>Payment Details</Heading>
            <Text>
              Complete your purchase by providing your payment details
            </Text>
            {/* FORM CONTAINER */}
            <Stack>
              <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                <FormControl>
                  <Stack spacing={4}>
                    <Stack spacing={1}>
                      <FormLabel m={0} p={0}>Email address</FormLabel>
                      <Input type='email' {...register('email',{
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                        required: true
                      })}/>
                      {errors.email?.type === "pattern" && (
                        <p>EL formato del email es incorrecto</p>
                      )}
                    </Stack>

                    <Stack spacing={1}>
                      <FormLabel m={0} p={0}>Cardholder name</FormLabel>
                      <Input type='text' {...register('cardholder_name', {
                        required: true
                      })}/>
                    {errors.cardholder_name && <p>Introduce the cardholder name</p>}
                    </Stack>
                  
                    <Stack spacing={1}>
                      <FormLabel m={0} p={0}>Card number</FormLabel>
                      <Input type='text' {...register('card_number', {
                        required: true,
                        validate: cardNumberLengthValid
                      })}/>
                      {errors.card_number && <p>Invalid card number</p>}
                    </Stack>

                    <Stack direction='row'>
                      <Stack spacing={1} w='50%'>
                        <FormLabel m={0} p={0}>Month/Year</FormLabel>
                        <Input type='month' min={`${currentDate()}`} {...register('card_date', {
                          required: true,
                        })}/>
                        {errors.card_date && <p>Specify a date</p>}
                      </Stack>

                      <Stack spacing={1} w='50%'>
                        <FormLabel m={0} p={0}>CVV</FormLabel>
                        <Input type='number' {...register('card_cvv', {
                          required: true,
                          validate: CardCVV
                        })}/>
                        {errors.card_cvv && <p>Must be 3 digits</p>}
                      </Stack>
                      
                    </Stack>


                    {validForm && 
                      <Stack>
                        <FormLabel m={0} p={0}>Amount (USD)</FormLabel>
                        <Input type="number" {...register('usd_amount', {
                          required: true
                        })}/>
                        {errors.usd_amount && <p>Introduce an amount</p>}
                      </Stack>
                      }
  
                      <Button type='submit' bgColor='cian.100' color='purple.100'>Send</Button>
                  </Stack>
                </FormControl>
              </form>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default PaymentForm;
