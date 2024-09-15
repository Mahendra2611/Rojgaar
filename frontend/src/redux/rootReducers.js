import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import companySlice from "./companySlice";
import JobSlice from "./JobSlice";
import LoaderSlice from "./loaderSlice";
import InternSlice from "./InternSlice";
const rootReducer = combineReducers({
user:userSlice,
company:companySlice,
job:JobSlice,
loader:LoaderSlice,
intern:InternSlice
})
export default rootReducer