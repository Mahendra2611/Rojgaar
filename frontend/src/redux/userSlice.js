import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name:"user",
    initialState:{
       
        user:{}
    },
    reducers:{
        
        addUser:(state,action)=>{
            state.user = action.payload
           
        },
        removeUser:(state,action)=>{
            state.user = []
           
        },
    }
})
export default userSlice.reducer;
export const {addUser,removeUser} = userSlice.actions