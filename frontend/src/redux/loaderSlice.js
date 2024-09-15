import { createSlice } from "@reduxjs/toolkit";
const LoaderSlice = createSlice({
    name:"loader",
    initialState:{
        loader:false,
       
    },
    reducers:{
        toggleLoader:(state,action)=>{
            state.loader = action.payload
        },
       
    }
})
export default LoaderSlice.reducer;
export const {toggleLoader} = LoaderSlice.actions