import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
    allUsers: [],
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signupStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signupSuccess: (state, action) => {
            state.loading = false;
            state.allUsers.push(action.payload);
            state.error = null;
        },
        signupFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signinStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        signinSuccess: (state, action) => {
            state.loading = false;
            state.currentUser = action.payload;
            state.error = null;
        },
        signinFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        signout: (state) => {
            state.currentUser = null;
        },
    },
});

export const { signupStart, signupSuccess, signupFailure, signinStart, signinSuccess, signinFailure, signout } = userSlice.actions;
export default userSlice.reducer;
