import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../utlis/axios";
import {apisURL} from '../constant/apis'


export const fetchStudents= createAsyncThunk("students/fetch", async () => {
    return await axiosInstance
    .get(`${apisURL}`)
    .then((res) => res.data.users)
});


const studentsreducer=createSlice({
    name:"students",
    initialState:{
        data:[],
    },
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchStudents.fulfilled,(state,action) => {
            state.data = action.payload;
        })
    }
})
export default studentsreducer.reducer;