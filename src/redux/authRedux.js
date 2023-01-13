import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./asyncActions";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        status: ''
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.currentUser = action.payload
        })
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = 'pending'
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = 'rejected'
        })
    }
})

export default authSlice.reducer