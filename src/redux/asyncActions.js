import { createAsyncThunk } from "@reduxjs/toolkit";
import { publicRequest } from "../requestMethods";

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async (user) => {
        const response = await publicRequest.post("/auth/login", user)
        return response.data
    }
)