import create from "zustand";
import { createTokenSlice } from "./createTokenSlice";


const useStore = create((set, get) => ({

  ...createTokenSlice(set, get),
  // ...createPostSlice(set, get),
}));

export default useStore;