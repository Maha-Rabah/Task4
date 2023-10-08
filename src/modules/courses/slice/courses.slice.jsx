import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from './../../../utlis/axios';


export const fetchCourses = createAsyncThunk("courses/fetch", async () => {
    return await axiosInstance
    .get("  ")
    .then((res) => res.data);
});


const coursesReducer = createSlice({
    name: "courses",
    initialState:{
        courses: [],
    },

    reducers: {},

    extraReducers: (builder) => {
        builder
        .addCase(fetchCourses.fulfilled, (state, action) => {
            state.courses = action.payload;
        })

    
    },

});

export default coursesReducer.reducer;