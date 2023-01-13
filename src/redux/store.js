import { configureStore } from "@reduxjs/toolkit"
import authSlice from "./authRedux"
import cartSlice from './cartRedux'

export default configureStore({
    reducer: {
        auth: authSlice,
        cart: cartSlice,
    }
})