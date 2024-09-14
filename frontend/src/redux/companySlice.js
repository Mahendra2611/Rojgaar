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
        },
        deleteComanyy:(state,action)=>{
            state.company.splice(action.payload,1);
        }
    }
})
export default companySlice.reducer;
export const {addCompany,updateCompany,deleteComanyy} = companySlice.actions