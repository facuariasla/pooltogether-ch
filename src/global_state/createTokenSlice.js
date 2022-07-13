export const createTokenSlice = (set, get) => ({
  tokens: null,
  favTokens: [],
  tokenToBuy: null,
  tokenToReceive: null,

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
  addToFav: (xToken) => {
    if(get().favTokens.length < 3){
      set({
        favTokens: [...new Set([...get().favTokens, xToken])],
      });
    } else {
      console.log('Elimina algun fav hdp')
    }
  },
  setTokenToBuy: (token)=> {
    set({
      tokenToBuy: token
    })
  },
  setTokenToReceive: (token)=> {
    set({
      tokenToReceive: token
    })
  },
});
