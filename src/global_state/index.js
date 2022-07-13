import create from "zustand";
import { createTokenSlice } from "./createTokenSlice";
import { createWalletSlice } from "./createWalletSlice";


const useStore = create((set, get) => ({

  ...createTokenSlice(set, get),
  ...createWalletSlice(set, get),
}));

export default useStore;