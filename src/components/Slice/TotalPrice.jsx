import { createSlice } from "@reduxjs/toolkit";

const TotalPrice = createSlice({
    name: "totalPrice",
    initialState: {
        "price" : 0,
    },
    reducers: {
        addPrice: (state, action) => {
            state.price = action.payload;

        },
       
    }
})

export const { addPrice } = TotalPrice.actions
export default TotalPrice.reducer