import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../Slice/CartSlice";
import TotalPrice from "../Slice/TotalPrice";

const appStore = configureStore({
    reducer : {
        "cartInfo" : CartSlice,
        "totalPrice" : TotalPrice
    }
})

export default appStore