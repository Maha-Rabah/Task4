import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from '../../../utlis/axios'
import {apisURL} from '../../students/constant/apis'


export const fetchTeachers= createAsyncThunk("teachers/fetch", async () => {
    return await axiosInstance
    .get(`${apisURL}`)
    .then((res) => res.data.users)
});


const teachersreducer=createSlice({
    name:"teachers",
    initialState:{
        data:[],
    },
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchTeachers.fulfilled,(state,action) => {
            state.data = action.payload;
        })
    }
})
export default teachersreducer.reducer;