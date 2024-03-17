import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: "cartInfo",
    initialState: {
        "cartDetails": JSON.parse(localStorage.getItem("cartItems")) || []
    },
    reducers: {
        addCartInfo: (state, action) => {
            state.cartDetails = action.payload;
            localStorage.setItem("cartItems", JSON.stringify(action.payload))

        },
        incrementCartItem: (state, action) => {
            const id = action.payload
            const itemIndex = state.cartDetails.findIndex(item => item.productInfo.id === id);
            if (itemIndex !== -1) {
                const updatedCartItems = [...state.cartDetails];
                updatedCartItems[itemIndex] = {
                    ...updatedCartItems[itemIndex],
                    quantity: updatedCartItems[itemIndex].quantity + 1
                };
                state.cartDetails = updatedCartItems
                localStorage.setItem("cartItems", (JSON.stringify(updatedCartItems)))
            }

        },
        decrementCartItem: (state, action) => {
            const id = action.payload
            const updatedCartItems = state.cartDetails.map(item => {
                if (item.productInfo.id === id && item.quantity > 0) {
                    return {
                        ...item,
                        quantity: item.quantity - 1
                    };
                }
                return item;
            }).filter(item => item.quantity > 0);
            state.cartDetails = updatedCartItems
            localStorage.setItem("cartItems", (JSON.stringify(updatedCartItems)))
        },
        clearCart: (state, action) => {
            state.cartDetails = [];
            localStorage.removeItem("cartItems");
        },
        removeCartItem: (state, action) => {
            const id = action.payload
            const updatedCartItems = state.cartDetails.filter(item => {
                if (item?.productInfo?.id !== id) {
                    return item;
                }
                
            })
            state.cartDetails = updatedCartItems
            localStorage.setItem("cartItems", (JSON.stringify(updatedCartItems)))
        },
       
    }
})

export const { addCartInfo, clearCart, incrementCartItem, decrementCartItem,removeCartItem } = CartSlice.actions
export default CartSlice.reducer