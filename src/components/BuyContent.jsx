import React, { useState } from 'react'
import { Stack } from '@chakra-ui/react'
import BuyPanels from './BuyPanels';


const BuyContent = () => {

  const [coinsData, setCoinsData] = useState('');
  return (
    <Stack>
      <Stack pt={8}>
        <BuyPanels/>
      </Stack>
    </Stack>
  )
}

export default BuyContent