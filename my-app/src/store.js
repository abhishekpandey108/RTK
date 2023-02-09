import { configureStore } from "@reduxjs/toolkit";
import {userSlice,counterSlice} from "./features/counterSlice";


export const store = configureStore({
    reducer:{
        users : userSlice.reducer,
        counter : counterSlice.reducer
    }})