import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/Slice/CartSlice";

export const store  = configureStore({
    reducer:{
        cart : cartReducer
    }
});