import { createSlice } from "@reduxjs/toolkit"
const initialState = {
    name: null,
    email: null,
    password: null,
    feedBacks: null
}
const feedBackSlice = createSlice({
    name: "feedBack",
    initialState,
    reducers: {
        addFeedBack: (state, action) => {
            // console.log("action", action.payload);
            // console.log("initialState", initialState);

            state.name = action.payload;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.feedBacks = action.payload.feedBack;
        }
    }
})
// console.log("initialState",initialState);

export default feedBackSlice
export const { addFeedBack } = feedBackSlice.actions




