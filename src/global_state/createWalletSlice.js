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
    },
    {
      id: 998,
      name: "USDC Coin",
      symbol: "USDC",
      quantity: 500,
    },
    {
      id: 997,
      name: "Binance USD",
      symbol: "BUSD",
      quantity: 800,
    },
  ],
  tokenToPay: null,
  setTokenToPay: (token) => {
    set({
      tokenToPay: token,
    });
  },

});
