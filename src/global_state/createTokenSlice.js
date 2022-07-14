export const createTokenSlice = (set, get) => ({
  tokens: null,
  favTokens: [],
  tokenToBuy: null,
  tokenToReceive: null,
  ETHprice: null,
  fetchTokens: async () => {
    const res = await fetch("https://api.0x.org/swap/v1/tokens");
    const data = await res.json();
    const arrayData = await data.records;

    // Some tokens were duplicated, so:
    const dataFiltered = await arrayData.filter(
      (value, index, self) =>
        index === self.findIndex((t) => t.symbol === value.symbol)
    );

    set({ tokens: dataFiltered });
  },
  // https://api.0x.org/swap/v1/price?sellToken=WETH&buyToken=USDT&sellAmount=1000000000000000000
  fetchETHPrice: async () => {
    // ETH y USDT pueden ser variables ${}
    const res = await fetch("https://api.0x.org/swap/v1/price?sellToken=ETH&buyToken=USDT&sellAmount=1000000000000000000");
    const data = await res.json();
    set({ ETHprice: data.price });
  },

  addToFav: (xToken) => {
    if (get().favTokens.length < 3) {
      set({
        favTokens: [...new Set([...get().favTokens, xToken])],
      });
    } else {
      let message = 'delete'
      console.log(message)
      return message
    }
  },
  setTokenToBuy: (token) => {
    set({
      tokenToBuy: token,
    });
  },
  setTokenToReceive: (token) => {
    set({
      tokenToReceive: token,
    });
  },
});
