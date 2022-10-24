import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from '../features/Quote/quoteSlice'


export const store = configureStore({
    reducer:{
        quoteNow:quoteReducer,
    }
}) 