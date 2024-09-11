import { createSlice } from "@reduxjs/toolkit";
const companySlice = createSlice({
    name:"company",
    initialState:{
        company:[]
    },
    reducers:{
       
        addCompany:(state,action)=>{
            state.company = action.payload
           
        },
        updateCompany:(state,action)=>{
            state.company[action.payload.id] = action.payload.data
        }
    }
})
export default companySlice.reducer;
export const {addCompany,updateCompany} = companySlice.actions