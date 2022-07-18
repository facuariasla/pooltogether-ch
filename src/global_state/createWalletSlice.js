export const createWalletSlice = (set, get) => ({
  realUSD: 0,
  userDATA: {},
  setRealUSD: (amount) => {
    // Simulacion de agregar dinero a la cuenta
    // llegan como string
    let amountINT = parseFloat(amount)
    set({
      realUSD: get().realUSD + amountINT,
    });
  },
  setUserData: (formData) => {
    // Simulacion de agregar dinero a la cuenta
    set({
      userDATA: formData,
    });
  },
});
