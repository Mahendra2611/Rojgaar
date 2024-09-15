import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const InterSlice = createSlice({
    name:"intern",
    initialState:{
        intern:[],
       
    },
    reducers:{
       
        addIntern:(state,action)=>{
            state.job = action.payload
           
        },
        updateIntern:(state,action)=>{
            state.job[action.payload.id] = action.payload.data
        },
        deleteIntern:(state,action)=>{
            state.job.splice(action.payload,1)
        },
       
    }
})
export default InterSlice.reducer;
export const {addIntern,updateIntern,deleteIntern} = InterSlice.actions