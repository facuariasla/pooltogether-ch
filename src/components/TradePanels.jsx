import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Stack,
  Text,
} from "@chakra-ui/react";
import SellPanel from "./SellPanel";
import BuyPanel from "./BuyPanel";

// #35F0D0
// FaChevronRight

const BuyPanels = () => {
  return (
    <Stack align="center">
      <Tabs w={["90%", null, "550px"]}>
        <TabList>
          <Tab
            _selected={{ color: "purple.100", bg: "cian.100" }}
            borderTopRadius={12}
            w="50%"
            fontWeight={500}
          >
            Comprar
          </Tab>
          <Tab
            _selected={{ color: "purple.100", bg: "cian.100" }}
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
            <BuyPanel />
          </TabPanel>

          {/* SELL PANEL*/}
          <TabPanel>
            <SellPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Stack>
  );
};

export default BuyPanels;
