import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: null,
        status: 'pending'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state.status = 'fulfilled'
            state.currentUser = action.payload
        })
        builder.addCase(loginUser.pending, (state, action) => {
            state.status = 'pending'
            state.currentUser = action.payload
        })
        builder.addCase(loginUser.rejected, (state, action) => {
            state.status = 'rejected'
            state.currentUser = action.payload
        })
    }
})