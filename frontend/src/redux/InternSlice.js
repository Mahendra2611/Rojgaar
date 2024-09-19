import { createSlice } from "@reduxjs/toolkit";
const InterSlice = createSlice({
    name:"intern",
    initialState:{
        intern:[],
       
    },
    reducers:{
       
        addIntern:(state,action)=>{
            state.intern = action.payload
           
        },
        updateIntern:(state,action)=>{
            state.intern[action.payload.id] = action.payload.data
        },
        deleteIntern:(state,action)=>{
            state.intern.splice(action.payload,1)
        },
       
    }
})
export default InterSlice.reducer;
export const {addIntern,updateIntern,deleteIntern} = InterSlice.actions