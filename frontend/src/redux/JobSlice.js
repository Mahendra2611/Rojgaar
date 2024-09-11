import { createSlice } from "@reduxjs/toolkit";
const jobSlice = createSlice({
    name:"job",
    initialState:{
        job:[]
    },
    reducers:{
       
        addJob:(state,action)=>{
            state.job = action.payload
           
        },
        updateJob:(state,action)=>{
            state.job[action.payload.id] = action.payload.data
        }
    }
})
export default jobSlice.reducer;
export const {addJob,updateJob} = jobSlice.actions