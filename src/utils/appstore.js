import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const  configAppStore = configureStore({
    reducer: {
        // Add your reducers here
    },
 
})