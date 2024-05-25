// student slice

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    students: [],
    loading: false,
    error: null,
};
export const studentSlice = createSlice({
    name: 'student',
    initialState,
    reducers: {
        studentsStart: (state) => {
            state.loading = true;
            state.error = null;
        },
        studentsSuccess: (state, action) => {
            state.loading = false;
            state.students = action.payload;
            state.error = null;
        },
        addStudent: (state, action) => {
            state.students.push(action.payload);
        },
       
        studentsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { studentsStart, studentsSuccess, studentsFailure, addStudent } = studentSlice.actions;
export default studentSlice.reducer;

