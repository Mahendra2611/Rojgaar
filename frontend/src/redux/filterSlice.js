import { createSlice } from "@reduxjs/toolkit";
const filterSlice = createSlice({
    name:"filter",
    initialState:{
        filter:{
            location:[],
            industry:[],
            salary:[],
            jobtype:[]
        }
    },
    reducers:{
       
        addFilter:(state,action)=>{
            state.filter[action.payload.id].push(action.payload.value)
           
        },
        removeFilter:(state,action)=>{
            let index = state.filter[action.payload.id].findIndex((elm)=>(elm===action.payload.value))
            if(index != -1){
                state.filter[action.payload.id].splice(index,1)
            }
        }
    }
})
export default filterSlice.reducer;
export const {addCompany,updateCompany} = filterSlice.actions