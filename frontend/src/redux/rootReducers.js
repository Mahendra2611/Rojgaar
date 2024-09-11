import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import companySlice from "./companySlice";
import JobSlice from "./JobSlice";
const rootReducer = combineReducers({
user:userSlice,
company:companySlice,
job:JobSlice
})
export default rootReducer