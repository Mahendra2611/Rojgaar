import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";
const jobSlice = createSlice({
    name:"job",
    initialState:{
        job:[],
        filter:[]
    },
    reducers:{
       
        addJob:(state,action)=>{
            state.job = action.payload
           
        },
        updateJob:(state,action)=>{
            state.job[action.payload.id] = action.payload.data
        },
        deleteJobb:(state,action)=>{
            state.job.splice(action.payload,1)
        },
        addFilter:(state,action)=>{
            console.log(state.filter)
            if(!state.filter.includes(action.payload)){
                state.filter.push(action.payload.toLowerCase())
            }
        },
        removeFilter:(state,action)=>{
            state.filter = state.filter.filter((filter)=>filter !== action.payload.toLowerCase())
        }
    }
})
export default jobSlice.reducer;
export const {addJob,updateJob,deleteJobb,addFilter,removeFilter} = jobSlice.actions