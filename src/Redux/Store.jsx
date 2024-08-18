import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice/CartSlice";

const Store = configureStore({
  reducer: {
    cart: CartReducer,
  },
});

export default Store;
