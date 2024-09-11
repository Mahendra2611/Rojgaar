import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:"user",
    initialState:{
        loader:false,
        user:{}
    },
    reducers:{
        toggleLoader:(state,action)=>{
            state.loader = action.payload
        },
        addUser:(state,action)=>{
            state.user = action.payload
           
        },
    }
})
export default userSlice.reducer;
export const {addUser,toggleLoader} = userSlice.actions