import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
   name: "cart",
   initialState: {
      items: [],        
      
    },
    reducers: {
        addToCart: (state, action) => {
            state
        },
        removeFromCart: (state, action) => {
            state.items.pop();
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;