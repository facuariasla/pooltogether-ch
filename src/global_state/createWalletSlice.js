export const createWalletSlice = (set, get) => ({
  // Array de tokens, con el el name, symbol, y quantity

  // Los tokens que tengo en la wallet tambien se tienen de 'fetch'
  // Esto es ficticio:
  walletTokens: [
    {
      id: 999,
      name: "Tether USD",
      symbol: "USDT",
      quantity: 999999,
      address: '0xdac17f958d2ee523a2206206994597c13d831ec7',
      decimals: 6,
    },
    {
      id: 998,
      name: "USDC Coin",
      symbol: "USDC",
      quantity: 500,
      address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      decimals: 6
    },
    {
      id: 997,
      name: "Binance USD",
      symbol: "BUSD",
      quantity: 800,
      address: '0x4Fabb145d64652a948d72533023f6E7A623C7C53',
      decimals: 18,
    },
  ],
  tokenToPay: null,
  setTokenToPay: (token) => {
    set({
      tokenToPay: token,
    });
  },

});
