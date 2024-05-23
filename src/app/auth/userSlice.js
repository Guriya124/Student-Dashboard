import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    user: null,
    error: null,
    loading: false,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUpStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signUpSuccess: (state, action) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.user = action.payload;
            state.error = null;
        },
        signUpFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signinStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signinSuccess: (state, action) => {
            state.loading = false;
            state.isLoggedIn = true;
            state.user = action.payload;
            state.error = null;
        },
        signinFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

export const { signUpStart, signUpSuccess, signUpFailure, signinStart, signinSuccess, signinFailure, logout } = authSlice.actions;
export default authSlice.reducer;