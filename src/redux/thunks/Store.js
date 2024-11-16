import { configureStore } from "@reduxjs/toolkit";
import  feedBackSlice  from "../reducers/formData"
const store = configureStore({
    reducer: {
        [feedBackSlice.name]: feedBackSlice.reducer
    }
})
export default store;